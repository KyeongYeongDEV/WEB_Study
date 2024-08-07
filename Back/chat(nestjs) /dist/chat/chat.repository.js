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
exports.ChatRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chat_entity_1 = require("../domain/entity/chat.entity");
const typeorm_2 = require("typeorm");
let ChatRepository = class ChatRepository extends typeorm_2.Repository {
    constructor(chatRoomRepository) {
        super(chat_entity_1.ChatRoomEntity, chatRoomRepository.manager);
        this.chatRoomRepository = chatRoomRepository;
    }
    async createChatRoom(createChatRoomDTO, user) {
        try {
            const title = createChatRoomDTO.title;
            const newChatRoom = new chat_entity_1.ChatRoomEntity();
            newChatRoom.title = title;
            newChatRoom.createdAt = new Date();
            newChatRoom.participants = [user];
            await this.save(newChatRoom);
            return newChatRoom;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findChatRoomByChatRoomId(cr_id) {
        try {
            const foundChatRoom = await this.findOne({ where: {
                    cr_id: cr_id
                } });
            if (!foundChatRoom)
                throw new common_1.NotFoundException('채팅방을 찾지 못 했습니다');
            return foundChatRoom;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async deleteChatRoom(cr_id) {
        try {
            const foundChatRoom = await this.findChatRoomByChatRoomId(cr_id);
            this.remove(foundChatRoom);
            return;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
exports.ChatRepository = ChatRepository;
exports.ChatRepository = ChatRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_entity_1.ChatRoomEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChatRepository);
//# sourceMappingURL=chat.repository.js.map