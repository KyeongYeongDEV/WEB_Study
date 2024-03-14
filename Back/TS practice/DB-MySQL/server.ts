import express, {Response, Request, NextFunction} from "express";

import createApi from "./controller/api/Create";
import readApi from "./controller/api/Read";
import updateApi from "./controller/api/Update";
import deleteApi from "./controller/api/Delete";

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


app.use("/student", createApi);
app.use("/student", readApi);
app.use("/student", updateApi);
app.use("/student", deleteApi);

app.listen(port, () => {
    console.log(`App is listening on port ${port} !`);
});