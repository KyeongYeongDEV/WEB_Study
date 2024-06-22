import {Request, Response, NextFunction} from  "express";

import AuthService from  "../../services/auth.service";
import MailService from "../../services/mail.service";

export default class AuthController{
    private authService : AuthService;
    private mailService : MailService;

    constructor(authService : AuthService, mailService : MailService){
        this.authService = authService;
        this.mailService = mailService;
    }
    async login(req : Request, res : Response, next : NextFunction){
        
    }
    async signup(req : Request, res : Response, next : NextFunction){
        
    }
    sendEmailCode = async (req : Request, res : Response, next : NextFunction)=>{
        try{
            const userEmail : string = req.body.email;
            
            await this.mailService.isExistUSerEmail(userEmail);
            console.log(userEmail);
            this.mailService.setMailOption(userEmail);
            await this.mailService.sendEmailCode();

            res.status(200).send({
                msg : "Success send to email"
            })
        }catch(err : any){
            res.status(404).send({
                msg : "Fail send to email",
                err : err
            })
        }
    }
    verifyEmailCode = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const userInputCode = req.body.userInputCode;
            const userEmail = req.body.userEmail;

            await this.mailService.verifyEmailCode(userInputCode, userEmail);

            res.status(200).send({
                msg : "success certification"
            })

        }catch(err : any){
            res.status(404).send({
                msg : "failed certification",
                err : err.message
            })
        }
    }
}