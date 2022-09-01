const express = require("express");
const { engine } = require("express/lib/application");
const app  = express();

app.set('views', `${__dirname}'/views`);
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.get('/',(req,res)=>{
    res.send(`hi`);
});


app.get('/login',(req,res)=>{
    res.render('index');
});
const server = app.listen(3000,()=>{
    console.log('서버 가동');
});