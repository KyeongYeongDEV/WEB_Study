import nodemiler from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const user = process.env.NAVER_ID;
const pass = process.env.NAVER_PW;

const transporter = nodemiler.createTransport({
    service : "naver",
    host : "stmp.naver.com",
    port : 465,
    auth:{
        user : user,
        pass : pass
    }
});

export  {transporter};