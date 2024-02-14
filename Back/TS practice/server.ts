import express, { Application, NextFunction, Request, Response } from "express";
import { UserDto } from "./dto/user.data";
import { UserRequestDto } from "./dto/request/user-dto.request";
import apiIndex from "./api/index"
import apiRsp from "./api/rsp"

const app: Application = express();

const port: number = 3000;

//json 으로 받기 위해서
app.use(express.json());
//json형태 파일 디코딩 미들웨어
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiIndex);
app.use('/rsp',apiRsp)

app.listen(port, () => {
    console.log(`App is listening on port ${port} !`);
});