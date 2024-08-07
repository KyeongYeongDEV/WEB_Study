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
var ChatRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRepository = void 0;
const common_1 = require("@nestjs/common");
const chat_entity_1 = require("../domain/entity/chat.entity");
const typeorm_1 = require("typeorm");
let ChatRepository = ChatRepository_1 = class ChatRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(ChatRepository_1, dataSource.createEntityManager());
    }
    async createChatRoom({ u_id, title }) {
        try {
            const newChatRoom = new chat_entity_1.ChatRoomEntity();
            newChatRoom.title = title;
            newChatRoom.createdAt = new Date();
            newChatRoom.user.push(u_id);
            await this.save(newChatRoom);
            return newChatRoom;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findChatRoom(cr_id) {
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
            const foundChatRoom = await this.findChatRoom(cr_id);
            this.remove(foundChatRoom);
            return;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
exports.ChatRepository = ChatRepository;
exports.ChatRepository = ChatRepository = ChatRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ChatRepository);
//# sourceMappingURL=chat.repository.js.map