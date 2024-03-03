import {Request, Response, NextFunction, Router}from "express"
import { Database } from "../../model/database";
import { UserDto } from "../../model/dto/userDto";

const router = Router();

router.post("/",(req: Request, res:Response, next : NextFunction)=>{
    try{
        const {id, name} = req.body;
        const database = Database.getInstance();
        const newUser = new UserDto(id, name);

        database.users.push(newUser);
        res.status(201).json(newUser);
    }catch(e){
        next(e);
    }  
})

export default router;