import { NextFunction, Request, Response, Router } from "express";

import postData from "../../model/data/post.data"
import commentData from "../../model/data/comment.data"

import postRequestDto from "../../model/dto/request/post-dto.request";
import commentRequestDto from "../../model/dto/request/comment-dto.request";

const router = Router();


router.get("/",(req:Request, res: Response, next : NextFunction)=>{
    try{
        //TODO: 작성자 정보를 받으면 그 사람이 작성한 글과 댓글 불러오기
    
        const {author} : postRequestDto = req.body;
        //const author: String = req.query.author as String;
        
        let resultGetPost : postRequestDto[] = postData.filter((postData)=> author === postData.author);
        let resultGetComment : commentRequestDto [] = commentData.filter((commentData)=> author === commentData.author)
        
        const result: String[] = [];
        result.push("작성한 글 제목")
        resultGetPost.forEach(post => result.push(post.title));
        result.push("작성한 댓글")
        resultGetComment.forEach(comment => result.push(comment.comment));
        
        //throw new Error("Error to get");

        res.json(result)
        
    }catch(e){  
        next(e)
    }
})



export default router;