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
exports.SigninReqDto = exports.SignupReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SignupReqDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'nestjs@fastcampus.com' }),
    __metadata("design:type", String)
], SignupReqDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Password1!' }),
    __metadata("design:type", String)
], SignupReqDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Password1!' }),
    __metadata("design:type", String)
], SignupReqDto.prototype, "passwordConfirm", void 0);
exports.SignupReqDto = SignupReqDto;
class SigninReqDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'nestjs@fastcampus.com' }),
    __metadata("design:type", String)
], SigninReqDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 'Password1!' }),
    __metadata("design:type", String)
], SigninReqDto.prototype, "password", void 0);
exports.SigninReqDto = SigninReqDto;
//# sourceMappingURL=req.dto.js.map