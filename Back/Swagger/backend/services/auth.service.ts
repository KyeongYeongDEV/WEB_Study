import connection from "../configs/db.configs";
import { LoginUser, RequestUser, User } from "../types/user.type";
import crypto from "../configs/crypto.configs"

class AuthService{
    async isExistUser(userId :string){
        const [result, feild] = await connection.query(
            "select *from User where userId = ?",
            [userId]) as[User[], object];
            
        
        if(result.length != 0){
            throw new Error("err : already User exist");
        }

        return userId;
    }

    async join(user : RequestUser) :Promise<void>{
        try{
            const vaildUser = await this.isExistUser(user.userId);
            const hashedPw = await crypto.hash(user.userPw);
            
            await connection.query ("insert into User (userName, userId, userPw) VALUES (?, ?, ?)"
            ,[user.userName, vaildUser, hashedPw]);
            
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
        }catch(err){
            throw err;
        }
        
    }
} 

export default new AuthService(); 