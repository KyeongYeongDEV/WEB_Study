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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_decorator_1 = require("../common/decorator/swagger.decorator");
const req_dto_1 = require("../common/dto/req.dto");
const req_dto_2 = require("./dto/req.dto");
const res_dto_1 = require("./dto/res.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll({ page, size }) {
        return this.userService.findAll();
    }
    findOne({ id }) {
        return this.userService.findOne(id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_decorator_1.ApiGetItensResponse)(res_dto_1.FindUserResDto),
    (0, common_2.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.PageReqDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, swagger_decorator_1.ApiGetResponse)(res_dto_1.FindUserResDto),
    (0, common_2.Get)(':id'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_2.FindUserReqDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiExtraModels)(req_dto_2.FindUserReqDto, res_dto_1.FindUserResDto),
    (0, common_2.Controller)('api/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map