const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const { urlencoded } = require("body-parser")


class ServerManager{
    constructor(port){
        this.port = port
        app.use(bodyParser.json())
        app.use(urlencoded({extended:false}))
    }

    start(){
        app.listen(this.port, ()=>{
            console.log("서버가동")
        })
    }
    setRoute(path, route){
        app.use(path, route)
    }
}




module.exports = ServerManager