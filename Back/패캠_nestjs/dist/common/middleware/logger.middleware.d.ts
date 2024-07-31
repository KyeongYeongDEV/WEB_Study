import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";
export declare class LoggerMiddleware implements NestMiddleware {
    private logger;
    use(request: Request, response: Response, next: NextFunction): void;
}
