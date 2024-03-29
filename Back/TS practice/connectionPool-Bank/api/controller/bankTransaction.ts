import { connection, connectionPool } from "../../config/db";
import {Router, Request, Response, NextFunction} from "express";
import transactionRequestDto from "../../DTO/request/transaction.requestDTO";


const router = Router();

router.get("/", async(req:Request, res:Response, next : NextFunction)=>{
    const info:transactionRequestDto = req.body;

        const connection = await connectionPool.getConnection();

    try{
        await connection.beginTransaction();
        //TODO: 송금자와 수신자의 계과존재 유무 확인 및 송금자의 잔액 확인
        
        //TODO: 송금자의 정보 가져오기
        const [fromAccountRows,filed]  = await connection.query(`select *from bank_account 
        WHERE name = '${info.fromName}' AND account_number = ${info.fromAccountNumber}`);
        //const fromAccount = fromAccountRows[0];
        console.log(fromAccountRows);

        if(!fromAccountRows){
            throw new Error("송금자의 계좌 정보를 찾을 수 없습니다.")
        }
        
        

        //TODO: 수신자의 정보 가져오기
        
        await connection.commit();
    }catch(error){
        await connection.rollback();
    }finally{
        connection.release();
    }
})


export {router};