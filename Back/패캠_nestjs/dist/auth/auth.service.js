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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const refresh_token_entity_1 = require("./entity/refresh-token.entity");
let AuthService = class AuthService {
    constructor(userService, jwtService, refreshTokenRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.refreshTokenRepository = refreshTokenRepository;
    }
    async validateUser(email, password) {
        return null;
    }
    async signup(email, password) {
        const user = await this.userService.findOneByEmail(email);
        if (user)
            throw new common_1.BadRequestException();
        const newUser = await this.userService.create(email, password);
        return newUser;
    }
    async signin(email, password) {
        const user = await this.userService.findOneByEmail(email);
        if (!user)
            throw new common_2.UnauthorizedException();
        const isMatch = password == user.password;
        if (!isMatch)
            throw new common_2.UnauthorizedException();
        const refreshToken = await this.generateRefreshToken(user.id);
        await this.createRefreshTokenUsingUser(user.id, refreshToken);
        return {
            accessToken: this.jwtService.sign({ sub: user.id })
        };
    }
    generateRefreshToken(userId) {
        const payload = { sub: userId, tokenType: 'refresh' };
        return this.jwtService.sign(payload, { expiresIn: '30d' });
    }
    async createRefreshTokenUsingUser(userId, refreshToken) {
        let refreshTokenEntity = await this.refreshTokenRepository.findOneBy({ user: { id: userId } });
        if (refreshTokenEntity) {
            refreshTokenEntity.token = refreshToken;
        }
        else {
            refreshTokenEntity = this.refreshTokenRepository.create({ user: { id: userId }, token: refreshToken });
        }
        await this.refreshTokenRepository.save(refreshTokenEntity);
    }
};
AuthService = __decorate([
    (0, common_3.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(refresh_token_entity_1.RefreshToken)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map