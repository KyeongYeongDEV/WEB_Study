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
exports.FindVideoResDto = exports.VideoUserDto = exports.CreateVideoResDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateVideoResDto {
    static toDto({ id, title }) {
        return { id, title };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CreateVideoResDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CreateVideoResDto.prototype, "title", void 0);
exports.CreateVideoResDto = CreateVideoResDto;
class VideoUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], VideoUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], VideoUserDto.prototype, "email", void 0);
exports.VideoUserDto = VideoUserDto;
class FindVideoResDto {
    static toDto({ id, title, user: { id: userId, email } }) {
        return { id, title, user: { id: userId, email } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], FindVideoResDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], FindVideoResDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", VideoUserDto)
], FindVideoResDto.prototype, "user", void 0);
exports.FindVideoResDto = FindVideoResDto;
//# sourceMappingURL=res.dto.js.map