"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const public_decorator_1 = require("../common/decorator/public.decorator");
const role_decorator_1 = require("../common/decorator/role.decorator");
const user_service_1 = require("../user/user.service");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(refelctor, jwtService, userService) {
        super();
        this.refelctor = refelctor;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    canActivate(context) {
        const isPublic = this.refelctor.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const http = context.switchToHttp();
        const { url, headers } = http.getRequest();
        const token = /Bearer\s(.+)/.exec(headers['authorization'])[1];
        const decoded = this.jwtService.decode(token);
        if (url !== '/api/auth/refresh' && decoded['tokenType'] === 'refresh') {
            console.error('accessToken is required');
        }
        const requireRoles = this.refelctor.getAllAndOverride(role_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (requireRoles) {
            const userId = decoded['sub'];
            return this.userService.checkUserIdAdmin(userId);
        }
        return super.canActivate(context);
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        jwt_1.JwtService,
        user_service_1.UserService])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map