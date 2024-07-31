import { LoggerService } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { UserService } from "src/user/user.service";
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private refelctor;
    private jwtService;
    private userService;
    private logger;
    constructor(refelctor: Reflector, jwtService: JwtService, userService: UserService, logger: LoggerService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
