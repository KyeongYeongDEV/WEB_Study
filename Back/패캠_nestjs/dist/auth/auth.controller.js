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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../common/decorator/public.decorator");
const swagger_decorator_1 = require("../common/decorator/swagger.decorator");
const res_dto_1 = require("./dto/res.dto");
const req_dto_1 = require("./dto/req.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup({ email, password, passwordConfirm }) {
        if (password !== passwordConfirm)
            throw new common_1.BadRequestException('Password and PasswordConfirm is not matched.');
        const { id } = await this.authService.signup(email, password);
        return { id };
    }
    async signin({ email, password }) {
        return this.authService.signin(email, password);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.SignupResDto),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.SignupReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.SigninResDto),
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.SigninReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiExtraModels)(res_dto_1.SignupResDto, res_dto_1.SigninResDto),
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map