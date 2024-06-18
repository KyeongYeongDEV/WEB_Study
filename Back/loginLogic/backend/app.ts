import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>main page");
})

export default app;