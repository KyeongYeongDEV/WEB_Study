import { Request, Response, NextFunction, Router} from "express";
import commentRequestDto from "../../model/dto/request/comment-dto.request";
import commentData from "../../model/data/comment.data";
import postRequestDto from "../../model/dto/request/post-dto.request";

const router = Router();

router.get("/",(req:Request, res: Response, next : NextFunction)=>{
    try{
        //TODO: 글에 대한 댓글 가져오기
        // 글의 제목을 req 받고
        // 글에 대한 댓글을 res해준다

        const post : postRequestDto = req.body;
        const title = post.title;

        let comment :commentRequestDto [] = commentData.filter((commentData) => title === commentData.post)

        res.json(comment);

    }catch(e){
        next(e)
    }
})

router.post("/", (req:Request, res: Response, next : NextFunction)=>{
    try{
        //TODO:새로운 댓글 작성
        const newCommet : commentRequestDto = req.body;

        commentData.push(newCommet);

        res.json("successfully input new comment")
    }catch(e){
        next(e)
    }
})

export default router;