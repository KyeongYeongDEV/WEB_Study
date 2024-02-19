import {Request, Response, NextFunction} from "express"





export const postErrorMiddleware = (err :Error, req:Request, res:Response, next : NextFunction) => {
    console.log("post Error")
    res.json(`<h1> this is error ${err.message}</h1>`)
}
