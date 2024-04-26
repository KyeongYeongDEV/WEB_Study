import {Request, Response, NextFunction, Router} from "express";
import { connectionPool } from "../../configs/db.config";
//import {isAuthentaicated} from "../../service/authenticated"

const router : Router = Router();


declare module "express-session"{
    interface SessionData{
        user ? : {
            uid : number,
            userid : string,
            username : string
        }
    }
}

type userType = {
    uid : number,
    userid : string,
    username : string,
    userpw : string
}
async function isExistUserByUserId(userId : string){
    const connection = await connectionPool.getConnection();

    const [users, fields] = await connection.query(`
        Select * from owners  
        WHERE userid = ?`,
        [userId]) as [userType[], object];

    connection.release();

    if(users.length === 0) throw new Error ("can not find user");

    return users[0]
}

function isSameUserByUserPw(userPw : string, foundUserPw :string) : boolean{
    return (userPw === foundUserPw ? true : false)
}

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    try{
        type loginData ={
        userid : string;
        userpw : string;
        }

        const user = req.body as loginData;
        const foundUser = await isExistUserByUserId(user.userid);

        if(!isSameUserByUserPw(user.userpw, foundUser.userpw)) throw new Error("not valid user");
        
        req.session.user = {
            uid : foundUser.uid,
            userid : foundUser.userid,
            username : foundUser.username 
        }

        res.json({msg : "successfully login user!"});
    }catch(err){
        res.json({msg : (err as Error).message});
    }
});


export default router;