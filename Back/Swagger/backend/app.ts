import express from "express";
import index from "./apis/index"
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());


app.use("/api", index);

export default app;