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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_decorator_1 = require("../common/decorator/swagger.decorator");
const req_dto_1 = require("./dto/req.dto");
const res_dto_1 = require("./dto/res.dto");
const message_service_1 = require("./message.service");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    async sendMessage(cr_id, sendMessageRequestDto) { }
    async getMessages(cr_id) { }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Post)(':cr_id'),
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.MessageResDTo),
    __param(0, (0, common_1.Param)('cr_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, req_dto_1.SendMessageRequestDto]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)(':cr_id'),
    (0, swagger_decorator_1.ApiGetResponse)(res_dto_1.MessageResDTo),
    __param(0, (0, common_1.Param)('cr_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getMessages", null);
exports.MessageController = MessageController = __decorate([
    (0, swagger_1.ApiTags)('message'),
    (0, swagger_1.ApiExtraModels)(res_dto_1.MessageResDTo),
    (0, common_1.Controller)('message'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map