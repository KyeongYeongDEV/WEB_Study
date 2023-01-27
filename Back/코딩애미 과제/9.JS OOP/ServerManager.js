const express = require("express")
const app = express()
const bodyParser = require("body-parser")

class ServerManager{
    constructor(port){
        this.port = port
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:false}))
    }

    run(){
        app.listen(this.port, ()=>{
            console.log("서버 가동")
        })
    }
    setRoute(path, route){
        app.use(path, route)
    }
}

module.exports = {ServerManager}
