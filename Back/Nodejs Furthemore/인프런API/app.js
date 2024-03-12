const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("start!");
});

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/public/main.html");
});

app.get('/main', (req,res)=>{
    res.sendFile(__dirname + "/public/main.html");
});