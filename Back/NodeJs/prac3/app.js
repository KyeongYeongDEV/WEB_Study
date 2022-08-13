const express = require("express");
const app = express();

const PORT = 3000;

const home = require("./routes/home");

app.set("views","./views");
app.set("view engine", "ejs");

app.use("/",home);

app.listen(PORT, ()=>{
    console.log("서버 가동");
})  