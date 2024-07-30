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
exports.PageReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PageReqDto {
    constructor() {
        this.page = 1;
        this.size = 20;
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '페이지.default = 1' }),
    (0, class_transformer_1.Transform)(param => Number(param.value)),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PageReqDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '페이지당 데이터 갯수. default = 20' }),
    (0, class_transformer_1.Transform)(param => Number(param.value)),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PageReqDto.prototype, "size", void 0);
exports.PageReqDto = PageReqDto;
//# sourceMappingURL=req.dto.js.map