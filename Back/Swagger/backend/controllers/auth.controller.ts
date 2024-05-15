import {Request, Response, NextFunction } from "express";
import { LoginUser, RequestUser } from "../types/user.type";

import AuthService from "../services/auth.service";
import Mailer from "../services/mail.service"
import { connect } from "http2";




class AuthController{
    async login(req:Request, res:Response, next : NextFunction){
        try{
            const user : LoginUser = req.body;
            await AuthService.login(user);

            res.status(200).send({msg : "success to login"})
        }catch(err : any){
            res.status(404).send({
                msg : "fail to login",
                err : err.message
            });
        }
    }

    async join(req:Request, res:Response, next : NextFunction){
        try{
            const user : RequestUser = req.body;
            await AuthService.join(user);
            res.status(200).send({msg : "success to join"});
        }catch(err :any){
            res.status(404).send({
                msg : err.message,
                err : "fail to join"
            });
        }
    }   

    async sendEmailCode(req:Request, res:Response, next : NextFunction){
        try{
            const userEmail :string = req.body.userEmail;
            await Mailer.isExistUserEmail(userEmail);
            Mailer.setMailOption(userEmail);
            await Mailer.sendEmailCode();
            
            res.status(200).send({msg : "Success to send email"});
            
        }catch(err : any){
            res.status(404).send({
                msg : "Fail to send email",
                err : err.message
            });
        }
    }
    async verifyEmailCode(req:Request, res:Response, next : NextFunction){
        try{
            const userCode = req.body.code;
            const userEmail = req.body.userEmail;
            
            Mailer.verifyEmailCode(userCode, userEmail);
            res.status(200).send("승인!");

        }catch(err : any){
            res.status(404).send({
                msg : "인증번호가 틀립니다",
                err : "Not vaild code"
            });
            
        }
    }
}

export default new AuthController;