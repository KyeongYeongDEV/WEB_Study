import connection from "../configs/db.config";
import crypto from "../configs/crypto.config"
import dotenv from "dotenv";
import {RequestUser, SigninUser, SignupUser} from "../types/user.type"

dotenv.config();

export default class AuthService{
    public isExistUser = async (userId :string)=>{
        try{
            const [result, feild] = await connection.query(
                "select * from User WHERE userId = ?", [userId]
            )as [RequestUser[], object];
    
            if(result.length !== 0){
                throw new Error("err : already User exist");
            }
    
            return result[0];
        }catch(err){
            throw err;
        }
    }

    public getUser = async(userId : string)=>{
        try{
            const [result, feild] = await connection.query(
                "select * from User WHERE userId = ?", [userId]
            )as [RequestUser[], object];
    
            if(result.length === 0) return  null
    
            return result[0];
        }catch(err){
            throw err;
        }
    }

    public signUp = async(user : SignupUser) => {
        connection.beginTransaction;
        try{    
            const vailedUser = await this.isExistUser(user.userId);
            const hashedPw = await crypto.hash(user.userPw);

            const [status, feild] = await connection.query(
                "select status from email_status WHERE email = ?" ,[user.userEmail]
            )as [any[], object];

            if(status[0] !== "승인"){
                throw new Error("이메일 인증을 진행해 주세요");
            }

            await connection.query(
                "insert into User (userName, userId, userPw, email) values (?, ?, ?, ?)", 
                [vailedUser.userName, vailedUser.userId , hashedPw, vailedUser.userEmail]
            )
            await connection.query(
                "delete from email_status WHERE email = ?" , [vailedUser.userEmail]
            );
            connection.commit;
        }catch(err){
            connection.rollback;

            throw err;
        }
    }

    public login = async(user : SigninUser) => {
        try{
            const [result, feild] = await connection.query(
                "select * from User Where userId = ? ", [user.userId]
            )as [RequestUser[], object];

            
            if(result.length === 0) throw new Error("존재하지 않은 아이디입니다."); 

            if(!(crypto.isVailed(user.userPw, result[0].userPw)))
            console.log(result[0]);
            return result[0];
        }catch(err){
            throw err;
        }
    }

    public saveRefreshToken = async(rToken : string) => {
        try{
            await connection.query(
                "update User set rToken = ?", [rToken]
            );
        }catch(err){
            throw err;
        }
    }
}