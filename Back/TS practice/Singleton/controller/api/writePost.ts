import { Request, Response, NextFunction, Router } from "express";
import postRequestDto from "../../model/dto/request/post-dto.request";

import postData from "../../model/data/post.data"

const router = Router();

router.get("/", (req:Request, res:Response, next : NextFunction)=>{
    try{
        // TODO: 글의 제목을 req해주면 그 글과 글에 대한 댓글 가져오기
        const {title} : postRequestDto = req.body;
        
        
        res.json()

    }catch(e){
        next(e);
    }
})

router.post("/", (req:Request, res:Response, next : NextFunction)=>{
    try{
        // TODO: 글을 작성하는 post

        const newPost : postRequestDto = req.body;

        postData.push(newPost);

        res.json("Successfully input new post")

    }catch(e){
        next(e)
    }
})

export default router;