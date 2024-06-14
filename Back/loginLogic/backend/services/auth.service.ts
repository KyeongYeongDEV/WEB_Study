import Route, {Request, Response, NextFunction} from "express"
import bcryptConfig from "../configs/bcrypt.config";
import { connection } from "../configs/db.config";
import {signInUser, signUpUser} from "../types/user.type"


class AuthService{
    async signIn(user : signInUser) : Promise<signInUser>{
        try{
            const [signinUser, field] = await connection.query(
                "select * from user WHERE userId = ?",user.userId) as [signInUser[], object];
        
            if(signinUser.length === 0){
                throw new Error("user Id is not vaild");
            }
    
            if(!(bcryptConfig.isValid(user.userPw, signinUser[0].userPw))){
                throw new Error("비밀번호가 일치하지 않습니다");
            }

            return signinUser[0];
        }catch(err){
            throw err;
        }
    }

    async signUp(user : signUpUser) {
        try{ 
            //TODO: 트랜젝션을 사용할 것
            /**
             * 이미 있는 아이디인지
             * 이메일 인증 (코드 발급, 승인 됐는지 확인)
             * 모두 다 승인이 나면 회원가입 완료
             */

            
        }catch(err){

        }
    }
}

export default new AuthService();

