import connection from "../configs/db.config";
import MailTransporter from "../helpers/mail.helper";

class Mailer{
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

    public sendMailOption(target : string){
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
}