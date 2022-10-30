const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const Dotenv = require('dotenv')

app.get('/',(req, res)=>{
    res.send('HIIIIII')
})

app.listen(3000, ()=>{
    console.log('Start ~~')
})