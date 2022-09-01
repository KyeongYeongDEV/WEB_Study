const nodemailer = require('nodemailer');
const email = {
    "host":"smtp.mailtrap.io",
    "port":"2525",
    "secure" : false,
    "auth" : {
        "user" : "82e975b2fa894a",
        "pass" : "ce751d6a98d2e7"
    }
};


const send = async(option)=>{
    nodemailer.createTransport(email).sendMail(option, (error, info) =>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    })
};

let data={
    from : 'cky2662@naver.com',
    to:'coy2662@naver.com',
    subject: '테스트 메일입니다.',
    text : 'nodejs 한 시간만에 끝내보자'
};

send(email_data);