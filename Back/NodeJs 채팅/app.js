const express = require("express")
const socket  = require("socket.io")
const http = require("http")


const app = express()
const server = http.createServer(app)
const io = socket(server)


app.get("/", (req, res)=>{
    console.log("유저가 / 으로 접속하였습니다.!")
    res.send("Hello Express Server!!")
})


app.listen(8080, ()=>{
    console.log("서버 실행")
})
