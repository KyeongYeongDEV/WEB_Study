import express from "express";
import index from "./apis/index"
import cors from "cors";
import swaggerUi from "swagger-ui-express"

const swaggerFile = require("./swagger-output");




const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());


app.use("/api", index);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;