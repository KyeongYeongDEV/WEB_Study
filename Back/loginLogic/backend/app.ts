import express, {Request, Response, NextFunction} from "express"

const app =express();

app.get("/",(req : Request, res:Response)=>{
    res.send("main page")
})

app.use(express.json());
app.use(express.urlencoded({extended : false}));



export default app;