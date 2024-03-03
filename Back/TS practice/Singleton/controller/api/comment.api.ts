import {Request, Response, NextFunction, Router}from "express"
import { Database } from "../../model/database";
import { commentDto } from "../../model/dto/commentDto";

const router = Router();

router.post("/", (req:Request, res:Response, next:NextFunction)=>{
    try{
        const {userId} = req.params;
        const {author, postId, comment} = req.body;
        const newComment = new commentDto(author, postId, comment);

        const database = Database.getInstance();
        const user = database.users.find(element => element.getId() === userId);
        database.users = database.users.filter(user => user.getId() !== userId);

        if(!user){
            res.status(404).json({ error: 'User not found' });
        }else{
            const userPost = user.getPosts().find(post => post.getPostId()===postId);
            user.setPosts(user.getPosts().filter(post => post.getPostId() !== postId));
            userPost?.setComment(newComment);
            
            user.setPosts(userPost as any);
            database.users.push(user);
            res.status(201).json(userPost);
        }
    }catch(e){
        next(e);
    }
})

export default router;