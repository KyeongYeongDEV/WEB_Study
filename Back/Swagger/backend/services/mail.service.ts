import connection from "../configs/db.configs";
import MailTransporter from "../helpers/mailer.helper";

class Mailer{
    private mailOption : any;
    private target : string;
    private code : string;

    constructor(){
        this.target  = "";
        this.code = this.getCode();;
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
    async sendEmailCode(){
        try{
            MailTransporter.sendMail(this.getMailOption(), async(err, info)=>{
                if(err){
                    throw new Error();
                }else{
                    await connection.query(
                        "insert into email_status(email, code) values(?,?)"
                        ,[this.target, this.code]); 
                    console.log(info);
                    connection.end();
                }
            })            
        }catch(err){
            throw err;
        }
    }
}

//export default new Mailer();

const m = new Mailer();
m.setMailOption("cky2662@naver.com");
m.sendEmailCode();
