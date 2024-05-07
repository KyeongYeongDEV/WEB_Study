import {Request, Response, NextFunction } from "express";
import User from "../types/user.type"


class AuthController{

    async login(req:Request, res:Response, next : NextFunction){
        const user : User = req.body
    }

    async join(req:Request, res:Response, next : NextFunction){
        
    }


}

export default new AuthController;