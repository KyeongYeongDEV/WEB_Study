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
    async createChatRoom({ u_id, title }) {
        const user = await this.userRepository.findOne({ where: { u_id: u_id } });
        if (!user)
            throw new common_1.NotFoundException('사용자를 찾지 못했습니다.');
        const newChatRoom = this.chatRepository.createChatRoom({ u_id, title });
        user.chatRooms.push(await newChatRoom);
        await this.userRepository.save(user);
    }
    async deleteChatRoom(u_id) {
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