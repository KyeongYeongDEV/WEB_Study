import {transporter} from "../helper/mailer.helper"
import {connection} from "../configs/db.config";
import { EmailStatus } from "../types/user.type";


/**
 * 이미 존재하는 이메일인지 확인
 * 랜덤 코드를 전송
 * 코드 확인
 *  */ 
class Mailer{
    private mailOption : any;
    private target : string;
    private code : string;

    constructor(){
        this.target =  "";
        this.code = this.getCode();;
    }

    private getRandomNumber(){
        return Math.floor(Math.random() * 10);
    }

    private getCode() : string{
        const code = [
            this.getRandomNumber(),
            this.getRandomNumber(),
            this.getRandomNumber(),
            this.getRandomNumber()
        ].join() as string;

        return code
    }
    
    public getMailOption(){
        return this.mailOption();
    }
    
    public async isExistUserEmail(userEmail : string){
        try{
            const [result, field] = await connection.query(
                "select * from user WHERE email = ?", userEmail
            ) as [any[], object];
            connection.end();

            let existEmailCheck : number = 0;

            if(result[0] !== undefined) existEmailCheck = 1;

            if(existEmailCheck){
                throw new Error("이미 존재하는 이메일 입니다.");
            }
        }catch(err){
            throw err;
        }
    }
    
    public async sendEmailCode(){
        try{    
            transporter.sendMail(this.getMailOption(), async(err, info)=>{
                if(err){
                    throw err;
                }else{
                    const statusWait : string = "대기";

                    await connection.query(
                        "insert into email_status(email, status, code) values (?, ?, ?)"
                        ,[this.target, statusWait, this.code]
                    )
                }
            })
        }catch(err){
            throw err;
        }
    }

    public async verifyEmailCode(userCode : string, userEmail : string){
        await connection.beginTransaction();
        try{
            /**
             * TODO: 트랜젝션을 이용할 것
             * 1. email_status table에서 userEmail에 대한 인증코드를 가져온다
             * 2. 입력한 코드와 일치한지 검사
             *  참 = email_staus에 "승인"으로 변경
             *  거짓 = 거짓이라 알려주기
             */
            const statusApprove : string = "승인";

            const [getCode, field] = await connection.query(
                "select * from email_status WHERE email = ?", userEmail
            )as [EmailStatus[], object];

            if(getCode[0].code !== userCode){
                throw new Error("코드가 일치하지 않습니다.");
            }
            await connection.query(
                "insert into email_status(status) values (?)", statusApprove )

            connection.commit();
        }catch(err){
            await connection.rollback();
            throw err;
        }
        // finally{
        //     connection.release();
        //  mysql2부터는 자동으로 해주기 때문에 수동으로 해줄 필요가 없음
        // }
    }

} 

export default new Mailer();