import { configDotenv } from "dotenv";
import {Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import { RequestUser } from "../types/user.type";



class AuthController{

    async login(req:Request, res:Response, next : NextFunction){
        //const user : User = req.body;
    }

    async join(req:Request, res:Response, next : NextFunction){
        try{
            const user : RequestUser = req.body;
            await AuthService.join(user);
            res.status(200).send({msg : "success to join"});
        }catch(err :any){
            res.status(404).send({
                msg : "fail to join", 
                err : err.message
            });
        }
    }   


}

export default new AuthController;