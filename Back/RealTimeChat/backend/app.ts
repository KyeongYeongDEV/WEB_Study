import express from "express";
import cors from "cors"
import index from "./apis/routes/index"
import swaggerUi from "swagger-ui-express"

const swaggerFile = require("./swagger-output");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors())

app.use("/api",index);

app.get("/",(req,res)=>{
    res.status(200).send("<h1>main page");
})

export default app;