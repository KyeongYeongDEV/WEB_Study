import { LoggerService, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";
export declare class LoggerMiddleware implements NestMiddleware {
    private readonly logger;
    constructor(logger: LoggerService);
    use(request: Request, response: Response, next: NextFunction): void;
}
