import { Router, Request, Response, NextFunction } from "express";
import connection from "../../config/db";

const router = Router();

router.delete("/", (req:Request, res:Response, next : NextFunction)=>{

})

export default router;