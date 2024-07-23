"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const user_entity_1 = require("../auth/user.entity");
const board_entitiy_1 = require("../boards/board.entitiy");
exports.typeORMConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Dkdldnjs7098!',
    database: 'asdf',
    entities: [board_entitiy_1.BoardEntity, user_entity_1.UserEntity],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.options.js.map