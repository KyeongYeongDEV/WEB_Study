"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../domain/user/user.entity");
class UserRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(user_entity_1.UserEntity, dataSource.createEntityManager());
    }
    async createUser(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const user = this.create({ username, password });
        try {
            await this.save(user);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY' || error.code === '23505') {
                throw new common_1.ConflictException('Existing usename');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repositoty.js.map