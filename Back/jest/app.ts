import express,{Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;


app.get("/",(req : Request, res : Response)=>{
    res.status(200).send("port 8000 server start");
})

// app.listen(port ,()=>{
//     console.log("port 8000 server start");
// })

export default app;