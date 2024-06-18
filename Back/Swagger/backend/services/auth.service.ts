import connection from "../configs/db.config";
import { LoginUser, RequestUser } from "../types/user.type";
import crypto from "../configs/crypto.config";
import dotenv from "dotenv";

dotenv.config();

class AuthService{
    async isExistUser(userId :string){
        const [result, feild] = await connection.query(
            "select *from User where userId = ?",
            [userId]) as[RequestUser[], object];
            
        
        if(result.length != 0){
            throw new Error("err : already User exist");
        }

        return userId;
    }
    
    async getUser(userId : string){
        const [result, field] = await connection.query(
            "select * from User where userId = ?",
            [userId]
        )as [any[], any];

        if(result.length === 0) return null;
        
        return result[0];
    }

    async join(user : RequestUser) :Promise<void>{
        try{
            const vaildUser = await this.isExistUser(user.userId);
            const hashedPw = await crypto.hash(user.userPw);

            
            const [status, feild]  = await connection.query(
                "select status from email_status where email = ?",
                [user.userEmail]
            )as [any[], object];
                console.log(status[0].status)

            if(status[0].status !== "승인") throw new Error("이메일 인증을 진행해 주세요");
            
            
            await connection.query ("insert into User (userName, userId, userPw, email) VALUES (?, ?, ?, ?)"
            ,[user.userName, vaildUser, hashedPw, user.userEmail]);

            await connection.query(
                "delete from email_status where email = ?",
                [user.userEmail]);
            
        }catch(err){
            
            throw err;
        }
    }
    async login(user : LoginUser){
        try{
            const [result, feild] = await connection.query(
                "select * from User where userId = ?",
                [user.userId]) as [RequestUser[], object];
                
            if(result.length === 0) throw new Error("존재하지 않은 아이디 입니다");
                
            if(!(await crypto.isValid(user.userPw, result[0].userPw))){
                throw new Error("비밀번호가 일치하지 않습니다");
            }

            return result[0];
        }catch(err){
            throw err;
        }
    }

    async saveRefreshToken(rToken : string){
        try{
            await connection.query(
                "update User set rToken = ?",
                [rToken]
            );
        }catch(err : any){
            throw err;
        }
    }

    async deleteRefreshToken(){

    }
} 

export default new AuthService(); 