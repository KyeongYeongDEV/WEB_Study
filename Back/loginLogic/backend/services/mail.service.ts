import connection from "../configs/db.config";
import MailTransporter from "../helpers/mail.helper";
import {RequestUser, EmailStatus} from "../types/user.type"

export default class Mailer{
    private mailOption : any;
    private target : string;
    private code : string;

    constructor(){
        this.target = ""
        this.code  = ""
    }

    private getRandNumber(){
        return Math.floor(Math.random() * 10);
    }

    private getCode(){
        const code = [
            this.getRandNumber(),
            this.getRandNumber(),
            this.getRandNumber(),
            this.getRandNumber()
        ].join("") as string

        return code;
    }

    public setMailOption = (target : string) => {
        const from = process.env.NAVER_EMAIL;

        this.code = this.getCode();
        this.target = target;

        this.mailOption = {
            from : from,
            to : this.target,
            subject : "[My App 이메일 인증코드]",
            html : `<h3>인증 코드 : ${this.code} </h3>`
        }
    }

    private getMailOption(){
        return this.mailOption;
    }

    public isExistUSerEmail = async (userEmail : string) => {
        try{
            const [result, feild] = await connection.query(
                "select * from user WHERE email = ?", [userEmail]
            )as [RequestUser[], object];
            
            
            if(result.length !== 0){
                throw new Error("이미 존재하는 이메일 입니다");
            }
        }catch(err){            
            throw err;
        }
        
    }

    public sendEmailCode = async() =>{
        connection.beginTransaction;
        try{
            const statusWait = "대기"

            MailTransporter.sendMail(this.getMailOption(), async(err, info)=>{
                if(err){
                    throw err;
                }else{
                    const [result, feild] = await connection.query(
                        "select * from email_status WHERE email = ?", [this.target]
                    )as [EmailStatus[], object];
        
                    if(result.length !== 0){
                        await connection.query(
                            "UPDATE email_status SET code = ? WHERE email = ?",[this.code, this.target]
                        )
                    }else{
                        await connection.query(
                            "insert into email_status (email, status, code) values (?, ?, ?)",
                            [this.target, statusWait, this.code]
                        )
                    }
                }
            })

            connection.commit;
        }catch(err){
            connection.rollback;
            throw err;
        }
    }

    public verifyEmailCode = async(userCode : string, userEmail : string) => {
        connection.beginTransaction;
        try{
            const statusAccess = "승인"

            const [result, feild] =  await connection.query(
                "select * from email_status WHERE email = ?" , userEmail
            )as [EmailStatus[], object];
    
            if(result[0].code === userCode){
                await connection.query(
                    "update email_status set status = ?", statusAccess
                )
            }else{
                throw new Error("인증코드가 일치하지 않습니다");
            }

            connection.commit;
        }catch(err){
            connection.rollback;
            throw err;
        }
    }
}