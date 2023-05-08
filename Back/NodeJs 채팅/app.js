const express = require("express")
const socket  = require("socket.io")
const http = require("http")

const fs = require('fs')

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

    socket.on('newUser', (name)=>{
        // 소켓에 이름 저장하기
        socket.name = name
        
        // 본인을 포함한 모든 유저에게 전송
        io.sockets.emit('update', {type:'connect', name: 'SERVER', message:name + '님이 접속하셨습니다.'})
    })

    // 전송한 메세지 받기
    socket.on('message', (data)=>{
        // 받은 데이터에 누가 보냈는지 이름 추가
        data.name = socket.name

        let li = document.createElement('li')
        li.innerText = `${data.name} : ${data.msg}`
        chatList.appendChild(li)

        console.log(data)

        // 보낸 사람은 제외한 나머지 유저에게 메시지 전송
        socket.broadcast.emit('update', data)
    })
    
    socket.on('disconnect', ()=>{
        console.log(socket.name + '님이 나가셨니다.')
        // 나가는 사함을 제외한 나머지 유저에게 메시지 전송
        socket.broadcast.emit('update', {type :'disconnect', name: 'SERVER', message: socket.name + '님이 나가셨습니다'})
    })
})



server.listen(port, ()=>{
    console.log("서버 실행")
})
