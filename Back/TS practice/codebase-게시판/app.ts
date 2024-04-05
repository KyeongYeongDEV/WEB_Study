import express ,{Request, Response, NextFunction} from "express";
import {SERVER} from "./contants/env.constants"
import session from "express-session"
import v1 from "./api/v1/index"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended :false}));
app.use(
    session({
        secret: "secret",
        saveUninitialized : false,
        resave :false
    })
);

app.use("/api/v1",v1);
app.get("/",(req:Request, res:Response)=>{
    res.send("<h1> main page");
})

app.listen(3000, ()=>{
    console.log("server open");
})

debugger

