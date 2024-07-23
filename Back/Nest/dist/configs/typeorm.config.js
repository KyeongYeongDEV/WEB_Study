"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const user_entity_1 = require("../domain/user/user.entity");
const board_entitiy_1 = require("../domain/board/board.entitiy");
const typeorm_1 = require("typeorm");
exports.typeORMConfig = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 8000,
    username: "postgres",
    password: "postgres",
    database: "BoardProject",
    entities: [board_entitiy_1.BoardEntity, user_entity_1.UserEntity],
    synchronize: true
});
//# sourceMappingURL=typeorm.config.js.map