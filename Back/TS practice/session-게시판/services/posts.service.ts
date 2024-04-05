import {Router, Request, Response, NextFunction} from "express";

const router = Router();


//TODO: 세션 확인 미들웨어 추가
router.post("/creat",(req:Request, res:Response, next : NextFunction)=>{
    res.send("생성");
})

router.get("/read",(req:Request, res:Response, next : NextFunction)=>{
    res.send("읽기");
})

router.put("/update",(req:Request, res:Response, next : NextFunction)=>{
    res.send("수정");
})

router.delete("/delete",(req:Request, res:Response, next : NextFunction)=>{
    res.send("삭제");
})

export default router;