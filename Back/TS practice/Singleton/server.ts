import express, {Request, Response, NextFunction} from "express"

import apiPost from "./controller/api/writePost"
import apiComment from "./controller/api/writeComment";
import apiFindUserPost from "./controller/api/findUserPost";

import { postErrorMiddleware } from "./middleware/post.middleware";

const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended :false}));

app.get("/", (req:Request, res:Response, next :NextFunction)=>{
    
    try{
        res.send("main page")
        throw new Error();
    }catch(e){
        next(e)
    }
})

app.use("/post", apiPost)
app.use("/comment", apiComment);
app.use("/userPost", apiFindUserPost);


app.use("/", postErrorMiddleware)


app.listen(port, ()=>{
    console.log("server start")
})