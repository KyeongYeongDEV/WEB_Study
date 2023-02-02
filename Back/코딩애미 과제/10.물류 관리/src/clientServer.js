const express = require("express")
const app = express()
const bodypaser = require("body-parser")

class ClientServer{
    constructor(port){
        this.port = port
        app.use(bodypaser.json())
        app.use(bodypaser.urlencoded({extended : false}))
    }
    run(){
        app.listen(this.port, ()=>{
            console.log("ClientServer Start!")
        })
    }
    setRoute(path, route){
        app.use(path, route)
    }
}

module.exports = ClientServer