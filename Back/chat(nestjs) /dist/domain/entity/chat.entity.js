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
exports.ChatRoomEntity = void 0;
const typeorm_1 = require("typeorm");
const message_entity_1 = require("./message.entity");
const user_entity_1 = require("./user.entity");
let ChatRoomEntity = class ChatRoomEntity extends typeorm_1.BaseEntity {
};
exports.ChatRoomEntity = ChatRoomEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChatRoomEntity.prototype, "cr_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ChatRoomEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ChatRoomEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, user => user.chatRooms, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'chat_room_participants',
        joinColumn: { name: 'chat_room_id', referencedColumnName: 'cr_id' },
        inverseJoinColumn: { name: 'user_id', referencedColumnName: 'u_id' }
    }),
    __metadata("design:type", Array)
], ChatRoomEntity.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.MessageEntity, message => message.chatRoom, { eager: true }),
    __metadata("design:type", Array)
], ChatRoomEntity.prototype, "messages", void 0);
exports.ChatRoomEntity = ChatRoomEntity = __decorate([
    (0, typeorm_1.Entity)('chat_rooms')
], ChatRoomEntity);
//# sourceMappingURL=chat.entity.js.map