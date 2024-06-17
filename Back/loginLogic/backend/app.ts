import express, {Request, Response} from "express"

import apiIndex from "./apis/index"
import cors from "cors";



const app =express();

app.get("/",(req : Request, res:Response)=>{
    res.send("main page")
})

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cors);

app.use("/api",apiIndex);


export default app;