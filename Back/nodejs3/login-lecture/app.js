"use strict";
//모듈
const express = require("express");
const app = express();

const PORT = 3000;

//라우팅
const home = require("./routes/home");//현재폴더에서/routes라는 폴더 안에서/home폴더 안에 있는 js코드를 읽어와줘 라는 말

//앱 세팅
app.set("views","./views"); 
app.set("view engine", "ejs") 

//use를 통애 불러와준다.
app.use("/",home); // use -> 미들 웨어를 등록해주는 매서드


//서버 띄우기
app.listen(PORT, ()=>{
    console.log("서버 가동");
})