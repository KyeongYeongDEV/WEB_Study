import express from "express";
import index from "./apis/index"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api", index);

export default app;