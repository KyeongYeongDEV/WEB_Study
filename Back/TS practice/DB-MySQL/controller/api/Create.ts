import { Router, Request, Response, NextFunction } from "express";
import connection from "../../config/db";
import { studentRequestDto } from "../../Dto/requeat/student-Dto.request";
import { StudentDto } from "../../Dto/studentDto";

const router = Router();

router.post("/", (req:Request, res:Response, next : NextFunction)=>{
    try{
        const newStudent:studentRequestDto = req.body;

        const sql = `insert into student (id, name, age, score) values (${newStudent.id}, "${newStudent.name}", ${newStudent.age}, ${newStudent.score})`
    
        connection.query(sql,(error, results, fields)=>{
            if(error){
                res.json(error);
                return;
            }else{
                res.json(`success input new student`);
            }
        })
    }catch(e){
        next(e)
    }
})

export default router;