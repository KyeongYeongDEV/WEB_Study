import { Router, Request, Response, NextFunction } from "express";
import { accessToken, refreshToken } from "../configs/token.config";
import AuthService from "../services/auth.service";
import { SignInUser, SignUpUser, UserPayload } from "../types/user.type";


class AuthController{
    async signIn(req : Request, res : Response, next : NextFunction){
        try{
            const user : SignInUser= req.body;
            
            const foundUser : SignUpUser= await AuthService.signIn(user);
            const payload : UserPayload = {
                name : foundUser.userName,
                userId : foundUser.userId
            };

            const aToken = accessToken.generateToken(payload, "15m");
            const rToken = refreshToken.generateToken(payload, "15m");

            res.status(200).send({
                msg : "successfully signin",
                aToken : aToken,
                rToken : rToken
            });
        }catch(err : any){
            res.status(404).send({
                msg : "fail to signin",
                err : err
            });
        }
    }
}

export default new AuthController();

