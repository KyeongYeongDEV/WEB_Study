import Bcrypt from "../configs/bcrypt.config";
import { connection } from "../configs/db.config";
import {SignUpUser, SignInUser } from "../types/user.type"


class AuthService{
    async signIn(user : SignInUser) : Promise<SignUpUser>{
        try{
            const [signinUser, field] = await connection.query(
                "select * from user WHERE userId = ?",user.userId) as [SignUpUser[], object];
            connection.end();

            if(signinUser.length === 0){
                throw new Error("user Id is not vaild");
            }
    
            if(!(Bcrypt.isValid(user.userPw, signinUser[0].userPw))){
                throw new Error("비밀번호가 일치하지 않습니다");
            }

            return signinUser[0];
        }catch(err){
            throw err;
        }
    }
    
    async isExistUser(userId: string){
        try{
            const [result,field] = await connection.query(
                    "select * from user WHERE userId = ?", userId
            )as [SignUpUser[], object];
            connection.end();

            if(result.length !== 0) throw new Error("이미 존재하는 아이디 입니다.");

            return userId;
        }catch(err){
            throw err;
        }
    }
    async signUp(user : SignUpUser) {
        await connection.beginTransaction();
        try{ 
            //TODO: 트랜젝션을 사용할 것
            /**
             * 이미 있는 아이디인지 - 함수에서 할 것
             * 이메일 인증 (코드 발급, 승인 됐는지 확인)
             * 모두 다 승인이 나면 회원가입 완료
             */
            const vaildUser = await this.isExistUser(user.userId);
            const hashedPw = await Bcrypt.hash(user.userPw);

            


            
        }catch(err){

        }
    }
}

export default new AuthService();