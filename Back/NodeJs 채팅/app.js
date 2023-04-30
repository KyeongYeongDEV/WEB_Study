const express = require("express")
const socket  = require("socket.io")
const http = require("http")

const fs = require('fs')
const { response } = require("express")

const app = express()
const server = http.createServer(app)
const io = socket(server)

const port= 8080

app.use('/css', express.static('./static/css'))
app.use('/js', express.static('./static/js'))

//정적인 파일을 제공하기 위해 미들웨어 사용
app.get("/", (req, res)=>{
    fs.readFile('./static/index.html', (err, data)=>{
        if(err){
            res.send('Error')
        }else{
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }
    })
})

io.sockets.on('connection',(socket)=>{ // connection이라는 이벤트 발생시 콜백함수 실행
    console.log("유저 접속됨")    

    socket.on('send', (data)=>{
        console.log("전달된 메세지:", data.msg)    
    })
    
    socket.on('disconnect', ()=>{
        console.log('접속 종료')
    })
})



server.listen(port, ()=>{
    console.log("서버 실행")
})
