"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
class UserRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(user_entity_1.UserEntity, dataSource.createEntityManager());
    }
    async createUser(signUpReqDto) {
        const { name, email, password } = signUpReqDto;
        const user = this.create({ email, name, password });
        try {
            await this.save(user);
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Could not create user');
        }
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=auth.repository.js.map