import express, {Response, Request, NextFunction} from "express";

import readApi from "./controller/api/Read"

const app = express();
const port:number = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", (req:Request, res:Response, next : NextFunction)=>{
    try{
        res.send("main page");
    }catch(e){
        next(e);
    }
})

app.use("/student", readApi);

app.listen(port, () => {
    console.log(`App is listening on port ${port} !`);
});