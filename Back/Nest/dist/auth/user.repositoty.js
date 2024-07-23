"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
class UserRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(user_entity_1.UserEntity, dataSource.createEntityManager());
    }
    async createUser(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const user = this.create({ username, password });
        await this.save(user);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repositoty.js.map