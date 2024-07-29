import { Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { IS_PUBLIC_KEY } from "src/common/decorator/public.decorator";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    constructor(private refelctor : Reflector){
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
        return super.canActivate(context);
    }
}
