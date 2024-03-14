import { Router, Request, Response, NextFunction } from "express";
import connection from "../../config/db";

const router = Router();

router.put("/", (req:Request, res:Response, next : NextFunction)=>{
    //TODO: 학번과 이름을 조회해 성적을 수정한다.
    
    try{
        const studentInfo = req.body;

        const sql = `update student set score = ${studentInfo.score} where id = ${studentInfo.id} and name = "${studentInfo.name}"`;
    
        connection.query(sql,(error, results, fields)=>{
            if(error){
                res.json(error);
                return;
            }else{
                res.json(`successfully updated student information`);
            }
        })
    }catch(e){
        next(e)
    }
    
})

export default router;