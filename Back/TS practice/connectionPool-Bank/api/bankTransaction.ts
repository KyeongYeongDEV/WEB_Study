import {connectionPool } from "../config/db";
import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.post("/", async(req:Request, res:Response, next : NextFunction)=>{
    const info = req.body;

    const connection = await connectionPool.getConnection();

    type Account = {
        name: string;
        account_number: number;
        balance: number;
    };

    try{
        await connection.beginTransaction();
        //TODO: 송금자와 수신자의 계과존재 유무 확인 및 송금자의 잔액 확인
        
        //TODO: 송금자의 정보 가져오기
        const [fromAccountRows, Field1]  = await connection.query(`
        select *from bank_account 
        WHERE name = ? 
        AND account_number = ? `,
        [info.fromName, info.fromAccountNumber])as [Account[], object] ; //타입 지정을 해줘야 한다.

        if(!(fromAccountRows[0]||null)){ // 정보를 못 찾으면
            throw new Error("송금자의 계좌 정보를 찾을 수 없습니다.");
        }
        
        //TODO: 수신자의 정보 가져오기
        const [toAccountRows, Field2]  = await connection.query(`
        select *from bank_account 
        WHERE name = ? 
        AND account_number = ? `,
        [info.toName, info.toAccountNumber])as [Account[], object] ; //타입 지정을 해줘야 한다.

        if(!(toAccountRows[0]||null)){ // 정보를 못 찾으면
            throw new Error("수신자의 계좌 정보를 찾을 수 없습니다.");
        }

        //TODO: 송금자 통장 잔액 update
        const fromBalance = fromAccountRows[0].balance - info.remittanceAmount;
        await connection.query(`
        UPDATE bank_account 
        SET balance = ? 
        WHERE name = ?
        AND account_number = ?`, 
        [fromBalance, info.fromName, info.fromAccountNumber]);

        //위에 에러 나면 throw
        const [fromAccountRows2, Field3]  = await connection.query(`
        select *from bank_account 
        WHERE name = ? 
        AND account_number = ? `,
        [info.fromName, info.fromAccountNumber])as [Account[], object] ; 

        if(fromBalance !== fromAccountRows2[0].balance ) throw new Error();
        
        //TODO:  수신자 잔액 update
        const toBalance = toAccountRows[0].balance + info.remittanceAmount;

        await connection.query(`
        UPDATE bank_account 
        SET balance = ? 
        WHERE name = ?
        AND account_number = ?`, 
        [toBalance, info.toName, info.toAccountNumber,]);
        
        const [toAccountRows2, Field]  = await connection.query(`
        select *from bank_account 
        WHERE name = ? 
        AND account_number = ? `,
        [info.toName, info.toAccountNumber])as [Account[], object];

        if(toBalance !== toAccountRows2[0].balance) throw new Error();
        
        await connection.commit();
        connection.release(); //반환
        
        //res.json("송금을 완료 했습니다.");
        const [rows, Filed]  = await connection.query(`
        select *from bank_account`);
        res.json(rows)
    }catch(err){
        await connection.rollback();
        connection.release();

        console.log(err)
    }

})


export default router;