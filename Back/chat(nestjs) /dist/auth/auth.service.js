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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../user/user.repository");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signUp({ name, email, password, passwordComfirm }) {
        const foundUser = await this.userRepository.findUserByEmail(email);
        if (foundUser)
            throw new common_1.NotFoundException('이미 존재하는 회원');
        if (password !== passwordComfirm) {
            throw new Error('비밀번호가 일치하지 않습니다');
        }
        await this.userRepository.createUser({ email, name, password });
        return {
            message: '성공적으로 가입했습니다',
        };
    }
    async signIn({ email, password }) {
        const foundUser = await this.userRepository.findUserByEmail(email);
        if (!foundUser)
            throw new common_1.NotFoundException('존재하지 않은 회원입니다.');
        if (password !== foundUser.password)
            throw new common_1.BadRequestException('비밀번호가 일치하지 않습니다');
        return { accessToken: this.jwtService.sign({ sub: foundUser.email }) };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map