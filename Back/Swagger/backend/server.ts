import { Request, Response } from "express";
import app  from "./app";


const port = process.env.SERVER_PORT || 8000;

app.listen(port, ()=>{
    console.log("server start");
})