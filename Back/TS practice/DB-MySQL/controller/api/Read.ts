import { Router, Request, Response, NextFunction } from "express";
import connection from "../../config/db";

const router = Router();

router.get("/",(req:Request, res:Response, next : NextFunction)=>{
    //TODO: 학생 이름을 넘겨 받아 그 학생 정보를 보여주기
    try{
        const sql = "select *from student";
        connection.query(sql,(error, results, fields) => {
            if (error) {
                res.json(`Error executing query: ${error}`);
                return;
            } else {
                res.json(results)
            }
        });
    }catch(e){
        next(e)
    }
})

export default router;