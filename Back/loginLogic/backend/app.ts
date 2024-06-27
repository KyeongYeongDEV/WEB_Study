import express from "express";
import cors from "cors"
import index from "./apis/routes/index"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cors())

app.use("/api",index);

app.get("/",(req,res)=>{
    res.status(200).send("<h1>main page");
})

export default app;