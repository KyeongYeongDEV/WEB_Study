import express, {Request, Response, NextFunction, Application } from "express";

import login from "./services/login.service";
import posts from "./services/posts.service";

const app : Application= express();
const port : number = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/user",login);
app.use("/posts",posts);

app.get("/", (req:Request, res:Response, next : NextFunction)=>{
    res.send("main page")
})

app.listen(port, async()=>{
    console.log("server start");

})