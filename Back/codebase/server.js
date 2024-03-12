const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const db = require('./config/db');
const user = require('./controller/user')

const bodyparser = require('body-parser')

const SERVERPORT = process.env.SERVER_PORT;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

db.connect((err)=>{
    if(err) throw err;
    else console.log('db open!');
})

app.post('/',(req,res)=>{
    const  username = req.body.username;
    user.findUser(username).then((values)=>{
        res.send(values)
    })
    .catch((values)=>{
        res.send(values)
    })
})

app.listen(SERVERPORT, ()=>{
    console.log("Start")  

})