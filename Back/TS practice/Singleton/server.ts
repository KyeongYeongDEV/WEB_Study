import express, {Request, Response, NextFunction} from "express"

import { postErrorMiddleware } from "./middleware/post.middleware";
import { Database } from "./model/database";
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
        const userID:string  = req.params.userID;
        const {postId, content}  = req.body;

        const database = Database.getInstance();
        const user = database.users.find(element => element.getId() === userID);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            const newPost = new postDto(userID, postId, content);
            user.getPosts().push(newPost);
            res.status(201).json(newPost);
        }
    }catch(e){
        next(e);
    }
})



app.use("/", postErrorMiddleware)


app.listen(port, ()=>{
    console.log("server start")
})