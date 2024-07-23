"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcryptjs");
class UserRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(user_entity_1.UserEntity, dataSource.createEntityManager());
    }
    async createUser(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = this.create({ username, password: hashedPassword });
        const existingUser = await this.findOne({ where: { username } });
        if (existingUser) {
            throw new common_1.ConflictException('Username already exists');
        }
        try {
            await this.save(user);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repositoty.js.map