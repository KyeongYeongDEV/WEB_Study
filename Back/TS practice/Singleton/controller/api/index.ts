import { NextFunction, Request, Response, Router } from "express";
import post from "../../model/data/post.data";
import postData from "../../model/data/post.data"
import postRequestDto from "../../model/dto/request/post-dto.request";
const router = Router();


router.get("/",(req:Request, res: Response, next : NextFunction)=>{
    try{
        /**
         * req로 user을 받고 
         * 그 user가 작성한 글을 불러오고
         * 그 글에 대한 댓글을 불러온다
         * filter 사용
         */
        const {userName} = req.body;
        
        let result : postRequestDto[] = postData.filter((postData)=> userName === postData.author);
        
        
        //throw new Error("Error to get");

        res.json(result)
        
    }catch(e){
        next("Error to get")
    }
})

router.post("/", (req:Request, res:Response, next : NextFunction)=>{
    try{
        /**
         * post 정보 + comment 내용 저장
         */
    }catch(e){

    }
})

export default router;