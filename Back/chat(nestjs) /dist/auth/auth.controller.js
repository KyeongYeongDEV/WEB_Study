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
const swagger_1 = require("@nestjs/swagger");
const swagger_decorator_1 = require("../common/decorator/swagger.decorator");
const auth_service_1 = require("./auth.service");
const req_dto_1 = require("./dto/req.dto");
const res_dto_1 = require("./dto/res.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(signUpReqDto) {
        return this.authService.signUp(signUpReqDto);
    }
    async signIn(signInReqDto) {
        return this.authService.signIn(signInReqDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.SignUpResDto),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.SignUpReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('signin'),
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.SignInResDto),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.SignInReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, swagger_1.ApiExtraModels)(req_dto_1.SignInReqDto, req_dto_1.SignUpReqDto),
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map