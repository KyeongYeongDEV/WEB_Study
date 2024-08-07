"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chat_repository_1 = require("../chat/chat.repository");
const chat_entity_1 = require("../domain/entity/chat.entity");
const message_entity_1 = require("../domain/entity/message.entity");
const user_entity_1 = require("../domain/entity/user.entity");
const message_controller_1 = require("./message.controller");
const message_reposity_1 = require("./message.reposity");
const message_service_1 = require("./message.service");
let MessageModule = class MessageModule {
};
exports.MessageModule = MessageModule;
exports.MessageModule = MessageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([message_entity_1.MessageEntity, chat_entity_1.ChatRoomEntity, user_entity_1.UserEntity])
        ],
        controllers: [message_controller_1.MessageController],
        providers: [
            message_service_1.MessageService,
            message_reposity_1.MessageRepository,
            chat_repository_1.ChatRepository,
        ]
    })
], MessageModule);
//# sourceMappingURL=message.module.js.map