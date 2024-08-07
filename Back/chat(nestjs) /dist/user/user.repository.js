"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../domain/entity/user.entity");
const typeorm_1 = require("typeorm");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(user_entity_1.UserEntity, dataSource.createEntityManager());
    }
    async createUser({ name, email, password }) {
        try {
            const user = this.create({ email, name, password });
            await this.save(user);
            return user.email;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findUserByEmail(email) {
        try {
            const foundUser = await this.findOne({ where: { email } });
            return foundUser;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findUserByUserId(u_id) {
        try {
            const foundUser = await this.findOne({ where: { u_id: u_id } });
            if (!foundUser)
                throw new common_1.NotFoundException("존재하지 않는 회원입니다");
            return foundUser;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAllChatRoomsByUserId(u_id) {
        try {
            const foundUser = await this.findOne({ where: { u_id }, relations: ['chatRooms'] });
            if (!foundUser)
                throw new common_1.NotFoundException('사용자의 채팅방을 찾을 수가 없습니다');
            return foundUser.chatRooms;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserRepository);
//# sourceMappingURL=user.repository.js.map