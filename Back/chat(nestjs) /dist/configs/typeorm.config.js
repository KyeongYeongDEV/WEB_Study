"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const user_entity_1 = require("../auth/user.entity");
const typeorm_1 = require("typeorm");
exports.typeORMConfig = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 8000,
    username: "postgres",
    password: "postgres",
    database: "chat",
    entities: [user_entity_1.UserEntity],
    synchronize: true
});
//# sourceMappingURL=typeorm.config.js.map