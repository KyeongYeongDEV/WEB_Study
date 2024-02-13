import {Request, Response, NextFunction} from "express";

export const examMiddleware1 = (req : Request, res : Response, next : NextFunction)=>{
    try{
        console.log("this middleware is examMiddleware1 before Next")
        //throw new Error("middleware1");
        next();
        console.log("this middleware is examMiddleware1 after Next")
    }catch(e){
        console.log("catch");
        next(e);
    }
}

export const examMiddleware2 = (req : Request, res : Response, next : NextFunction)=>{
    try{
        console.log("this middleware is examMiddleware2 before Next")
        //throw new Error("middleware2");
        next();
        console.log("this middleware is examMiddleware2 after Next")
    }catch(e){
        console.log("catch");
        next(e);
    }
}

export const examMiddleware3 = (req : Request, res : Response, next : NextFunction)=>{
    try{
        console.log("this middleware is examMiddleware3 before Next")
        throw new Error("middleware3");
        next();
        console.log("this middleware is examMiddleware3 after Next")
    }catch(e){
        console.log("catch");
        next(e);
    }
}


export const customErrorMiddleware = (err :Error, req : Request, res: Response, next : NextFunction)=>{
    console.log("error");
    res.send(`<h1>this is error ${err.message}</h1>`);
}