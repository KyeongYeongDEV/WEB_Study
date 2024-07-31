import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    private logger = new Logger('HTTP');

    use(request : Request, response :Response, next : NextFunction) :void {}

}