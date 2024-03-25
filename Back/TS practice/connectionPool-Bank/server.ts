import express, { Request, Response, NextFunction } from "express";

import {connection, connectionPool} from "./config/db";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// connection.connect((err) =>{
//     if(err){
//         console.log("fall");
//     }else{
//         console.log("success");
//     }
// })

app.get("/", (req:Request, res:Response, next : NextFunction)=>{
    res.send("<h1> main page");
})

app.listen(port, async ()=>{
    console.log("server start");

    const connection  = await connectionPool.getConnection();
    await connection.beginTransaction()
    const [rows, fields] = await connection.query("select *from student");
    console.log(rows);
    console.log(fields);

    await connection.commit();
    connection.release();
})
