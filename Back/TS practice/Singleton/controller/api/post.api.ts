import {Request, Response, NextFunction, Router}from "express"
import { Database } from "../../model/database";
import { postDto } from "../../model/dto/postDto";

const router = Router();

router.post("/", (req:Request, res:Response, next : NextFunction)=>{
    try{
        const {userId}  = req.params;
        const {postId, content}  = req.body;

        const database = Database.getInstance();
        const user = database.users.find(element => element.getId() === userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            const newPost = new postDto(userId, postId, content);
            user.getPosts().push(newPost);
            res.status(201).json(newPost);
        }
    }catch(e){
        next(e);
    }
})

export default router;