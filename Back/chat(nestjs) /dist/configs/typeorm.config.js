"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const user_entity_1 = require("../domain/entity/user.entity");
const chat_entity_1 = require("../domain/entity/chat.entity");
const message_entity_1 = require("../domain/entity/message.entity");
exports.typeORMConfig = {
    type: "postgres",
    host: "localhost",
    port: 8000,
    username: "postgres",
    password: "postgres",
    database: "chat",
    entities: [user_entity_1.UserEntity, chat_entity_1.ChatRoomEntity, message_entity_1.MessageEntity],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map