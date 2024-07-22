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
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const createProperty_dto_1 = require("./dto/createProperty.dto");
const createPropertyZod_1 = require("./dto/createPropertyZod");
const parseId_pipe_1 = require("./pips/parseId.pipe");
const zodValidationPipe_1 = require("./pips/zodValidationPipe");
let PropertyController = class PropertyController {
    findAll() {
        return "All properties";
    }
    findOne(id, slug) {
        return `id = ${id}\nslug = ${slug}`;
    }
    findOneObject(id, sort) {
        console.log(typeof id);
        console.log(typeof sort);
        return id;
    }
    create(body) {
        return body;
    }
    update(id, body) {
        return body;
    }
};
exports.PropertyController = PropertyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id/:slug"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("slug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("/object/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("sort", common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findOneObject", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new zodValidationPipe_1.ZodValidationPipe(createPropertyZod_1.createPropertySchema)),
    (0, common_1.HttpCode)(202),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", parseId_pipe_1.ParseIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createProperty_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "update", null);
exports.PropertyController = PropertyController = __decorate([
    (0, common_1.Controller)('property')
], PropertyController);
//# sourceMappingURL=property.controller.js.map