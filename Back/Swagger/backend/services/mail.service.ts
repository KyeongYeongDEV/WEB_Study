import connection from "../configs/db.config";
import MailTransporter from "../helpers/mailer.helper";

class Mailer{
    private mailOption : any;
    private target : string;
    private code : string;

    constructor(){
        this.target  = "";
        this.code = "";
    }

    private getRandNumber(){
        return Math.floor(Math.random() * 10);
    }
    
    private getCode() : string{
        const code= [
            this.getRandNumber(),
            this.getRandNumber(),
            this.getRandNumber(),
            this.getRandNumber()
            ].join("") as string;
    
        return code;
    }
    public setMailOption(target : string) {
        const from = process.env.NAVER_EMAIL;
        this.code = this.getCode()
        this.target = target;

        this.mailOption = {
            from : from,
            to : this.target,
            subject : "[인증 관련 메일]",
            html : `<h3>This is CODE</h3><hr><span>${this.code}</span>`,
        }
    }
    public getMailOption(){
        return this.mailOption;
    }

    public async isExistUserEmail(userEmail : string){
        try{
            const [result, feild] = await connection.query(
                "select email from User Where email = ?", [userEmail]) as [any[], object];

            let existEmailCheck :number= 0;
            if(result[0] === undefined) existEmailCheck = 0;
            else existEmailCheck = 1;
            

            if(existEmailCheck) {
                throw new Error("이미 존재하는 이메일입니다");   
            }
        }catch(err){
            throw err;
        }
    }

    public async sendEmailCode(){
        try{
            MailTransporter.sendMail(this.getMailOption(), async(err, info)=>{
                if(err){
                    throw err;
                }else{
                    await connection.query(
                        "insert into email_status(email, code) values(?,?)"
                        ,[this.target, this.code]); 
                }
            })            
        }catch(err){
            throw err;
        }
    }

    public async verifyEmailCode(userCode : string, userEmail : string){
        try{      
            //TODO: 트랜젝션 적용시키기
            const [result, feild] = await connection.query(
                "select code from email_status where email = ?",[userEmail]  
            )as [any[], object];
            
            if(userCode == result[0].code){ 
                await connection.query(
                    "update email_status set status = ?",
                    ["승인"]
                )
            }
            else{
                throw new Error();
            }    
        }catch(err){
            throw err;
        }
    }
}

export default new Mailer();