import {Request, Response, NextFunction} from "express"
import { accessToken } from "../configs/token.config";
import authService from "../services/auth.service";

export default async(req : Request, res : Response, next : NextFunction) => {
    try{
        const bearerToken =  req.headers.authorization;

        if(!bearerToken){
            return res.status(401).send({msg : "unauthorized"});
        }

        const [delimiter, aToken] = bearerToken.split(" ");
        if(delimiter !== "Bearer") {
            return res.status(401).send({msg : "구분자 잘못함"});       
        }

        const decodedToken =  accessToken.isVerifyToken(aToken) as any;
        const user = await authService.getUser(decodedToken.userId);

        if(!user) return res.status(401).send({msg : "가입되지 않은 계정"})
        req.user = {name : user.userName, userId : user.userId};
        
        next();
    }catch(err : any){
        res.status(404).send({msg : "인가 실패", err : err.message});
    }
}