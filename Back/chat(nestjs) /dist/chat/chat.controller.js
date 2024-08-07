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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_decorator_1 = require("../common/decorator/swagger.decorator");
const chat_entity_1 = require("../domain/entity/chat.entity");
const chat_service_1 = require("./chat.service");
const req_dto_1 = require("./dto/req.dto");
const res_dto_1 = require("./dto/res.dto");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async createChatroom(createChatRoomRequestDTO, u_id) {
        return this.chatService.createChatRoom(u_id, createChatRoomRequestDTO);
    }
    async joinChatRoom() {
    }
    async getChatRoom(u_id) {
        return this.chatService.findAllChatRoomByUid(u_id);
    }
    async deleteChatRoom(u_id, cr_id) {
        return this.chatService.deleteChatRoom(u_id, cr_id);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)(":u_id/rooms"),
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.ChatRoomResponseDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('u_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.CreateChatRoomRequestDTO, Number]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createChatroom", null);
__decorate([
    (0, common_1.Post)(':u_id/rooms/:cr_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "joinChatRoom", null);
__decorate([
    (0, common_1.Get)(':u_id/rooms'),
    (0, swagger_decorator_1.ApiGetResponse)(res_dto_1.GetChatRoomListDTO),
    __param(0, (0, common_1.Param)('u_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getChatRoom", null);
__decorate([
    (0, common_1.Delete)(':u_id/rooms/:cr_id'),
    (0, swagger_decorator_1.ApiDeleteResponse)(chat_entity_1.ChatRoomEntity),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteChatRoom", null);
exports.ChatController = ChatController = __decorate([
    (0, swagger_1.ApiTags)('chat'),
    (0, swagger_1.ApiExtraModels)(req_dto_1.GetChatRoomRequestDTO, res_dto_1.ChatRoomResponseDTO, res_dto_1.GetChatRoomListDTO),
    (0, common_1.Controller)('api/chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map