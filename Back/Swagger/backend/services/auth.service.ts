import connection from "../configs/db.configs";
import { RequestUser } from "../types/user.type";
import crypto from "../configs/crypto.configs"

class AuthService{
    async join(user : RequestUser) :Promise<void>{
        try{
            console.log(user);
            const hashedPw = await crypto.hash(user.userPw);
            console.log(hashedPw)
            await connection.query ("insert into User (userName, userId, userPw) VALUES (?, ?, ?)"
            ,[user.userName, user.userId, hashedPw]);
            
        }catch(err){
            throw err;
        }
    }
    login(){

    }
} 

export default new AuthService(); 