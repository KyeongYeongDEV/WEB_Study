"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
const testing_1 = require("@nestjs/testing");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
class MockRepository {
    async findOneBy(query) {
        const user = new user_entity_1.User();
        user.email = query.email;
        return user;
    }
}
describe('User', () => {
    let userService;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                user_service_1.UserService,
                {
                    provide: (0, typeorm_1.getRepositoryToken)(user_entity_1.User),
                    useClass: MockRepository
                }
            ]
        }).compile();
        userService = module.get(user_service_1.UserService);
    });
    it('should', async () => {
        const email = 'nestjs@fastcampus.com';
        const result = await userService.findOneByEmail(email);
        expect(result.email).toBe(email);
    });
});
//# sourceMappingURL=user.service.spec.js.map