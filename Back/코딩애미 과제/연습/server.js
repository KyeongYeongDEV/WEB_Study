const express = require('express');
const app = express();
const Dotenv = require('dotenv').config()
const SERVERPORT = process.env.SERVERPORT;

const bodyparser = require('body-parser')

const db = require('./config/db')
const user = require('./controller/user')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

db.connect((err)=>{
    if(err) throw err ;
    else console.log('DB open')
})


app.post('/',(req,res)=>{
    const username=  req.body.username
    user.findUser(username).then((values)=>{
        res.send(values)
    })
    .catch((values)=>{
        res.send(values)
    })
})

app.listen(SERVERPORT, ()=>{
    console.log('Start ~~')
})