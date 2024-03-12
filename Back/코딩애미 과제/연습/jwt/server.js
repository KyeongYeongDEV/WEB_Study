const express = require('express')
const app = express();

const dotenv = require('dotenv').config()

const SERVERPORT = process.env.SERVERPORT

const db = require('./config/db')
const user = require('./controller/user')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

db.connect((err)=>{
    if(err) throw err
    else console.log('db open')
})

app.post('/',(req,res)=>{
    const username = req.body.username
    user.findUser(username).then((values)=>{
        console.log(values)
        res.send(values)
    })
    .catch((values=>{
        res.send(values)
    }))
})

app.listen(SERVERPORT, ()=>{
    console.log('server open');
})