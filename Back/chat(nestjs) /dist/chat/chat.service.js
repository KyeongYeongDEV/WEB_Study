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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("../user/user.repository");
const chat_repository_1 = require("./chat.repository");
let ChatService = class ChatService {
    constructor(chatRepository, userRepository) {
        this.chatRepository = chatRepository;
        this.userRepository = userRepository;
    }
    async findAllChatRoomByUid(u_id) {
        const founUser = await this.userRepository.findOne({ where: { u_id: u_id } });
        if (!founUser.chatRooms.length)
            throw new common_1.NotFoundException("사용자가 속한 채팅방이 없습니다");
        return founUser.chatRooms;
    }
    async findOneChatRoomByRoomId(cr_id) {
    }
    async createChatRoom(u_id, createChatRoomRequestDTO) {
        const user = await this.userRepository.findOne({ where: { u_id: u_id } });
        if (!user)
            throw new common_1.NotFoundException('사용자를 찾지 못했습니다.');
        const newChatRoom = await this.chatRepository.createChatRoom(createChatRoomRequestDTO, user);
        user.chatRooms.push(newChatRoom);
        await this.userRepository.save(user);
        return {
            message: "성공적으로 채팅방을 생성했습니다"
        };
    }
    async deleteChatRoom(u_id, cr_id) {
        const foundChatRoom = await this.chatRepository.findChatRoomByChatRoomId(cr_id);
        if (!foundChatRoom)
            throw new common_1.NotFoundException("일치하는 채팅방이 없습니다");
        const chatRoomUser = foundChatRoom.participants.find(user => user.u_id === u_id);
        if (!chatRoomUser)
            throw new common_1.NotFoundException("해당 채팅방에 접근 권한이 없습니다");
        await this.chatRepository.deleteChatRoom(cr_id);
        return {
            message: "성공적으로 채팅방을 삭제했습니다"
        };
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_repository_1.ChatRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [chat_repository_1.ChatRepository,
        user_repository_1.UserRepository])
], ChatService);
//# sourceMappingURL=chat.service.js.map