import { Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { IS_PUBLIC_KEY } from "src/common/decorator/public.decorator";
import { ROLES_KEY } from "src/common/decorator/role.decorator";
import { UserService } from "src/user/user.service";
import { Role } from "./enum/user.enum";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    constructor(
        private refelctor : Reflector, 
        private jwtService : JwtService, 
        private userService : UserService
        ){
        super();
    }

    canActivate(context : ExecutionContext) : boolean | Promise<boolean> | Observable<boolean>{
        const isPublic = this.refelctor.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic){
            return true;
        }
        // refresh API를 요청했을 때만 refreshToken를 활용할 수 있도록 함
        const http = context.switchToHttp();
        const {url, headers} = http.getRequest<Request>();
        const token = /Bearer\s(.+)/.exec(headers['authorization'])[1]
        const decoded = this.jwtService.decode(token);

        if (url !== '/api/auth/refresh' && decoded['tokenType'] === 'refresh') {
            console.error('accessToken is required');
        }

        const requireRoles = this.refelctor.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (requireRoles) {
            const userId = decoded['sub'];
            return this.userService.checkUserIdAdmin(userId);
        }

        return super.canActivate(context);
    }
}
