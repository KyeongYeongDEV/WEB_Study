import {Request, Response, NextFunction} from "express"
import { connectionPool } from "../configs/db.config";

declare module "express-session"{
    interface SessionData{
        user ? : {
            uId : number,
            userId : string,
            userPw : string
        }
    }
}

type userType ={
    uId : number,
    userId : string,
    userPw : string, 
    userName : string
}

async function isExistUserByUserId(userId : string){
    const connection = await connectionPool.getConnection();

    const [users, fields] = await connection.query(`
        SELECT * FROM owners
        WHERE userid = ?`,
        [userId]) as [userType[], object];
    connection.release()

    if(users.length === 0) throw new Error("can not fount user");

    return users[0];
}

function isSameUserByUserPw(userPw : string, foundPw : string) :  boolean{
    return (userPw === foundPw ? true : false);
}

const isAuthenticated = async(req : Request, res : Response, next : NextFunction)=>{
    try{
        type loginData = {
            userId : string;
            userPw : string;
        }
    
        const user = req.body as loginData
        const foundUser = await isExistUserByUserId(user.userId);

        if(!(isSameUserByUserPw(user.userPw, foundUser.userPw))) throw new Error("not valid user");

        req.session.user={
            uId : foundUser.uId,
            userId  : foundUser.userId,
            userPw : foundUser.userPw,
        }

        next()
    }catch(err){
        res.json({msg :(err as Error).message});
    }
};




export {isAuthenticated};