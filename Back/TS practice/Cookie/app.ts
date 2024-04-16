import express, {Request, Response, NextFunction, Application, json, urlencoded} from "express"
import cookieParser from "cookie-parser";
import { connected } from "process";

const app : Application = express();


app.use(json())
app.use(urlencoded({extended:false}));

app.use(cookieParser());


app.get("/", (req:Request, res:Response, next :NextFunction)=>{

    res.cookie("key1",'value1', {maxAge : 15*60*1000, httpOnly : true}); 
    res.send("main page") //쿠키 먼저 설정한 후 send하기
    
    console.log('Cookie : ', req.cookies)

    console.log('Signed Cookies: ', req.signedCookies);
})

app.listen(3000, ()=>{
    console.log("server start");

})