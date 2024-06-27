import {Request, Response, NextFunction} from  "express";
import { accessToken, refreshToken } from "../../configs/token.config";
import AuthService from  "../../services/auth.service";
import MailService from "../../services/mail.service";
import { SigninUser, SignupUser, UserPayload } from "../../types/user.type";

export default class AuthController{
    private authService : AuthService;
    private mailService : MailService;

    constructor(authService : AuthService, mailService : MailService){
        this.authService = authService;
        this.mailService = mailService;
    }
    public login = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const user : SigninUser = req.body;
            const foundUser : any = await this.authService.login(user);

            const payload : UserPayload = {
                name : foundUser.userName,
                userId : foundUser.userId
            }
            const aToken = accessToken.generateToken(payload, "10m");
            const rToekn = refreshToken.generateToken(payload, "10m");

            await this.authService.saveRefreshToken(rToekn);

            res.status(200).send({
                msg : "sucess to login",
                accessToken : aToken,
                refreshToken : rToekn
            });
        }catch(err : any){
            res.status(404).send({
                msg : "fail to login",
                err : err.message
            });
        }
    }
    public signup = async(req : Request, res : Response, next : NextFunction) => {
        try{
            const user : SignupUser = req.body;
            await this.authService.signUp(user);

            res.status(200).send({
                msg : "success to signup"
            });
        }catch(err : any){
            res.status(404).send(
                {
                    msg : "fail to signup",
                    err : err.message
                }
            )
        }
    }
    public sendEmailCode = async (req : Request, res : Response, next : NextFunction)=>{
        try{
            const userEmail : string = req.body.userEmail;
            
            await this.mailService.isExistUSerEmail(userEmail);

            this.mailService.setMailOption(userEmail);
            await this.mailService.sendEmailCode();

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
    public verifyEmailCode = async (req : Request, res : Response, next : NextFunction) => {
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