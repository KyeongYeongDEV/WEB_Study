import express, { Request, Response, NextFunction } from "express";

import bankTransaction from "./api/bankTransaction";

const app = express();
const port : number = 3000;



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/bank',bankTransaction);


app.get("/", (req:Request, res:Response, next : NextFunction)=>{
    res.send("<h1> main page");
})


app.listen(port, async ()=>{
    console.log("server start");    
    
    
})
