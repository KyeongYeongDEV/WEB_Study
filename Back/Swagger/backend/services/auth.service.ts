import connection from "../configs/db.configs";
import { RequestUser, User } from "../types/user.type";
import crypto from "../configs/crypto.configs"

class AuthService{
    async isExistUser(userId :string){
        const [result, feild] = await connection.query(
            "select *from User where userId = ?",
            [userId]) as[User[], object];
        
        if(result.length != 0){
            throw new Error("User is existed");
        }

        return userId;
    }

    async join(user : RequestUser) :Promise<void>{
        try{
            const vaildUser = await this.isExistUser(user.userId);
            console.log(user);
            const hashedPw = await crypto.hash(user.userPw);
            console.log(hashedPw)
            await connection.query ("insert into User (userName, userId, userPw) VALUES (?, ?, ?)"
            ,[user.userName, vaildUser, hashedPw]);
            
        }catch(err){
            throw err;
        }
    }
    login(){

    }
} 

export default new AuthService(); 