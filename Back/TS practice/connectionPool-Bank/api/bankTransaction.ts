import {connectionPool } from "../config/db";
import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.get("/", async(req:Request, res:Response, next : NextFunction)=>{
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
        const [fromAccountRows, fromFiled]  = await connection.query(`
        select *from bank_account 
        WHERE name = ? 
        AND account_number = ? `,
        [info.fromName, info.fromAccountNumber])as [Account[], object] ; //타입 지정을 해줘야 한다.

        if(!(fromAccountRows[0]||null)){ // 정보를 못 찾으면
            throw new Error("송금자의 계좌 정보를 찾을 수 없습니다.");
        }
        
        //TODO: 수신자의 정보 가져오기
        const [toAccountRows, toFiled]  = await connection.query(`
        select *from bank_account 
        WHERE name = ? 
        AND account_number = ? `,
        [info.toName, info.toAccountNumber])as [Account[], object] ; //타입 지정을 해줘야 한다.

        if(!(toAccountRows[0]||null)){ // 정보를 못 찾으면
            throw new Error("수신자의 계좌 정보를 찾을 수 없습니다.");
        }

        //TODO: 송금자 통장 잔액 update
        await connection.query(`
        UPDATE bank_account 
        SET balance = ? 
        WHERE name = ?
        AND account_number = ?`, 
        [fromAccountRows[0].balance - info.remittanceAmount, info.fromName, info.fromAccountNumber]);
        
        //TODO:  수신자 잔액 update
        await connection.query(`
        UPDATE bank_account 
        SET balance = ? 
        WHERE name = ?
        AND account_number = ?`, 
        [toAccountRows[0].balance + info.remittanceAmount, info.toName, info.toAccountNumber,]);
        
        await connection.commit();
        //res.json("송금을 완료 했습니다.");
        const [rows, Filed]  = await connection.query(`
        select *from bank_account`);
        res.json(rows)
    }catch(err){
        await connection.rollback();
        console.log(err)
    }finally{
        
        connection.release();
    }

})


export default router;