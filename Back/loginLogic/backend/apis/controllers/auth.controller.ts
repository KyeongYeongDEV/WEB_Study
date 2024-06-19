import {Request, Response, NextFunction} from  "express";

import AuthService from  "../../services/mail.service";
import MailService from "../../services/mail.service";

class AuthController{
    async login(req : Request, res : Response, next : NextFunction){
        
    }
    async signup(req : Request, res : Response, next : NextFunction){
        
    }
    async sendEmailCode(req : Request, res : Response, next : NextFunction){
        try{
            const userEmail : string = req.body.email;
            
            await MailService.isExistUSerEmail(userEmail);
            MailService.setMailOption(userEmail);
            await MailService.sendEmailCode();

            res.status(200).send({
                msg : "Success send to email"
            })
        }catch(err : any){
            res.status(404).send({
                msg : "Fail send to email",
                err : err.message
            })
        }
    }
    async verifyEmailCode(req : Request, res : Response, next : NextFunction){
        try{
            const userInputCode = req.body.userInputCode;
            const userEmail = req.body.userEmail;

            await MailService.verifyEmailCode(userInputCode, userEmail);

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

export default new AuthController();