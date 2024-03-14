import { Router, Request, Response, NextFunction } from "express";
import connection from "../../config/db";

const router = Router();

router.delete("/", (req:Request, res:Response, next : NextFunction)=>{
    try{
        const studentId = req.body;

        //TODO: 먼저 학생이 있는지 검새을 한 다음 학생이 있다면 삭제하는 걸로 수정
        const sql = `delete from student where id = ${studentId.id}`;
        connection.query(sql,(error, results, fields) => {
            if (error) {
                res.json(error);
                return;
            } else {
                res.json("successfully deleted student information");
            }
        });
    }catch(e){
        
    }
})

export default router;