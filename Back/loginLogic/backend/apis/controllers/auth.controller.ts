import {Request, Response, NextFunction} from  "express";
import { accessToken, refreshToken } from "../../configs/token.config";
import AuthService from  "../../services/auth.service";
import MailService from "../../services/mail.service";
import { RequestUser, SigninUser, SignupUser, UserPayload } from "../../types/user.type";

export default class AuthController{
    private authService : AuthService;
    private mailService : MailService;

    constructor(authService : AuthService, mailService : MailService){
        this.authService = authService;
        this.mailService = mailService;
    }
    async login(req : Request, res : Response, next : NextFunction){
        try{
            const user : SigninUser = req.body;
            const foundUser : any = this.authService.login(user);
            const payload : UserPayload = {
                name : foundUser.userName,
                userId : foundUser.userId
            }

            const aToken = accessToken.generateToken(payload, "10m");
            const rToekn = refreshToken.generateToken(payload, "10m");

            this.authService.saveRefreshToken(rToekn);

            res.status(200).send({
                msg : "sucess to login",
                accessToken : aToken,
                refreshToken : rToekn
            });
        }catch(err : any){
            res.status(404).send({
                msg : "fail to login",
                err : err
            });
        }
    }
    async signup(req : Request, res : Response, next : NextFunction){
        try{
            const user : SignupUser = req.body;
            
            console.log("ssdfsdfsdf")
            await this.authService.signUp(user);

            res.status(200).send({
                msg : "success to signup"
            });
        }catch(err : any){
            res.status(404).send(
                {
                    msg : err,
                    err : "fail to signup"
                }
            )
        }
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