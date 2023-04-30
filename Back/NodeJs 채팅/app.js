const express = require("express")
const socket  = require("socket.io")
const http = require("http")

const fs = require('fs')
const { response } = require("express")

const app = express()
const server = http.createServer(app)
const io = socket(server)

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
            response.end()
        }
    })
})


app.listen(8080, ()=>{
    console.log("서버 실행")
})
