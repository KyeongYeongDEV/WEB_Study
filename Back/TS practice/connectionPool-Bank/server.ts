import express, { Request, Response, NextFunction } from "express";
import { RowDataPacket } from "mysql2";

import {connection, connectionPool} from "./config/db";
import fromAccountRequestDto from "./DTO/request/fromAccount.requestDto";



//import {bankTransaction} from "./api/controller/bankTransaction";

const app = express();
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/", (req:Request, res:Response, next : NextFunction)=>{
    res.send("<h1> main page");
})

app.listen(port, async ()=>{
    console.log("server start");
    const connection = await connectionPool.getConnection();

    const info = {
        "fromName" : "최경영",
        "fromAccountNumber" : 10001,
        "toName" : "강태현",
        "toAccountNumber" : 10003,
        "amount" : 10000
    };

    type Account = {
        name: string;
        account_number: number;
        balance: number;
    };

    try{
        await connection.beginTransaction();
        //TODO: 송금자와 수신자의 계과존재 유무 확인 및 송금자의 잔액 확인
        
        //TODO: 송금자의 정보 가져오기
        const [fromAccountRows, filed]  = await connection.query(`select *from bank_account 
        WHERE name = ? AND account_number = ? `,["asdf", info.fromAccountNumber])as [Account[], object] ;

        console.log(typeof(filed))

        // const rows :Account[] = fromAccountRows as Account[];
        // const row : Account = rows[0]||null; // 휴지심은 있다 //undefined == 휴지심도 없음
    
        

        if(!(fromAccountRows[0]||null)){ // 정보를 못 찾으면
            console.log("정보 못 찾아")
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
