import { Request, Response, NextFunction, Router} from "express";
import rspData from "../data/rsp.data"
import { rspRequestDto } from "../dto/request/rsp-dto";
import { rspCompare } from "../controller/rspCompare";

const router = Router();

router.get("/",(req:Request, res : Response, next : NextFunction)=>{
    res.json(rspData);
})

router.post("/", (req:Request, res:Response, next:NextFunction)=>{
    const reqRsp : rspRequestDto = req.body;

    
    const gameResult : rspRequestDto = new rspCompare(reqRsp).resultOfGame();

    rspData.push(gameResult)
    res.json(gameResult)
})





export default router;