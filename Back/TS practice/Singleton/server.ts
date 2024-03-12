import express, {Request, Response, NextFunction} from "express"

import { postErrorMiddleware } from "./middleware/post.middleware";

import userApi from "./controller/api/user.api";
import postApi from "./controller/api/post.api";
import commentApi from "./controller/api/comment.api";
import { connection } from "./config/db";


const app = express();
const port = 3000


app.use(express.json());
app.use(express.urlencoded({extended :false}));

connection.connect((err)=>{
    if(err){
        console.log("fall");
    }else{
        console.log("succsses");
    }
})

app.use("/user", userApi);
app.use("/post/:userId", postApi);
app.use("/post/comment/:userId", commentApi);
app.use("/", postErrorMiddleware)

app.get("/", (req:Request, res:Response, next :NextFunction)=>{
    
    try{
        res.send("main page")
        throw new Error();
    }catch(e){
        next(e)
    }
})


app.listen(port, ()=>{
    console.log("server start")
})