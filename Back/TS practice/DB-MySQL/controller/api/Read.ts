import { Router, Request, Response, NextFunction } from "express";
import connection from "../../config/db";

const router = Router();

router.get("/",(req:Request, res:Response, next : NextFunction)=>{
    try{
        const sql = "select *from 학생";
        connection.query(sql,(error, results, fields) => {
            if (error) {
                console.error('Error executing query: ', error);
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