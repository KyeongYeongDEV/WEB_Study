import express, {Request, Response, NextFunction} from "express"

import { postErrorMiddleware } from "./middleware/post.middleware";
import { Database } from "./model/database";
import { commentDto } from "./model/dto/commentDto";
import { postDto } from "./model/dto/postDto";
import { UserDto } from "./model/dto/userDto";



const app = express();
const port = 3000


app.use(express.json());
app.use(express.urlencoded({extended :false}));

app.get("/", (req:Request, res:Response, next :NextFunction)=>{
    
    try{
        res.send("main page")
        throw new Error();
    }catch(e){
        next(e)
    }
})


app.post("/user",(req: Request, res:Response, next : NextFunction)=>{
    try{
        const {id, name} = req.body;
        const database = Database.getInstance();
        const newUser = new UserDto(id, name);

        database.users.push(newUser);
        res.status(201).json(newUser);
    }catch(e){
        next(e);
    }  
})

app.post("/post/:userId", (req:Request, res:Response, next : NextFunction)=>{
    try{
        const {userId}  = req.params;
        const {postId, content}  = req.body;

        const database = Database.getInstance();
        const user = database.users.find(element => element.getId() === userId);

        //TODO: 고치기
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

//TODO: post에 대한 comment 추가 만들기
app.post("/post/comment/:userId", (req:Request, res:Response, next:NextFunction)=>{
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
        }
    }catch(e){
        next(e);
    }
})


app.use("/", postErrorMiddleware)


app.listen(port, ()=>{
    console.log("server start")
})