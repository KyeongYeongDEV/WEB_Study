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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chat_repository_1 = require("../chat/chat.repository");
const message_reposity_1 = require("./message.reposity");
let MessageService = class MessageService {
    constructor(messageRepository, chatRepository) {
        this.messageRepository = messageRepository;
        this.chatRepository = chatRepository;
    }
    async sendMessage(cr_id, sendMessageRequestDTO) {
        const foundChatRoom = await this.chatRepository.findChatRoomByChatRoomId(cr_id);
        const newMessage = await this.messageRepository.createMessage(cr_id, sendMessageRequestDTO);
        foundChatRoom.messages.push(newMessage);
        await this.chatRepository.save(foundChatRoom);
        return {
            message: "성공적으로 메세지를 생성했습니다"
        };
    }
    async getMessage({ cr_id }) {
        try {
            const messages = await this.messageRepository.getMessagesByChatRoomId(cr_id);
            return messages;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(message_reposity_1.MessageRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(chat_repository_1.ChatRepository)),
    __metadata("design:paramtypes", [message_reposity_1.MessageRepository,
        chat_repository_1.ChatRepository])
], MessageService);
//# sourceMappingURL=message.service.js.map