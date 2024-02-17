import { NextFunction, Request, Response, Router } from "express";
import post from "../model/data/post.data";
import postData from "../model/data/post.data"
const router = Router();

router.get("/",(req:Request, res: Response, next : NextFunction)=>{
    try{
        /**
         * 게시글들을 불러오고
         * 그 게시글을 fillter해서 
         * 댓글을 불러온다.
         */
        let post = "댓글 1"

        res.json(postData)
        res.json(post)
    }catch(e){
        next("Error to get")
    }
})

router.post("/", (req:Request, res:Response, next : NextFunction)=>{
    try{

    }catch(e){

    }
})

export default router;