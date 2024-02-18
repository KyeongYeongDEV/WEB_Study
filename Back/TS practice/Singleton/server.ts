import express, {Request, Response, NextFunction} from "express"

import apiIndex from "./controller/api/index"
import { postErrorMiddleware } from "./middleware/post.middleware";

const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended :false}));



app.use("/postget", apiIndex)
app.use("/postget", postErrorMiddleware)

app.listen(port, ()=>{
    console.log("server start")
})