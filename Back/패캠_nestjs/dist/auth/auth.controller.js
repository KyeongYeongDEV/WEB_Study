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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const req_dto_1 = require("./dto/req.dto");
const res_dto_1 = require("./dto/res.dto");
const swagger_decorator_1 = require("../common/decorator/swagger.decorator");
const common_2 = require("@nestjs/common");
const public_decorator_1 = require("../common/decorator/public.decorator");
const user_decorator_1 = require("../common/decorator/user.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup({ email, password, passwordConfirm }) {
        if (password !== passwordConfirm)
            throw new common_2.BadRequestException();
        const { id } = await this.authService.signup(email, password);
        return { id };
    }
    async signin({ email, password }) {
        return this.authService.signin(email, password);
    }
    async refresh(authorization, user) {
        const token = /Bearer\s(.+)/.exec(authorization)[1];
        const { accessToken, refreshToken } = await this.authService.refresh(token, user.id);
        return { accessToken, refreshToken };
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(res_dto_1.SignupResDto) }],
        }
    }),
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.SignupResDto),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.SignupReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.SigninResDto),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.SigninReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.RefreshResDto),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof user_decorator_1.UserAfterAuth !== "undefined" && user_decorator_1.UserAfterAuth) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiExtraModels)(res_dto_1.SignupResDto, req_dto_1.SignupReqDto, res_dto_1.SigninResDto, res_dto_1.RefreshResDto),
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map