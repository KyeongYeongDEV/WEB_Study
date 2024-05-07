import express from "express";
import apiIndex from "./apis/index"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api", apiIndex);

export default app;