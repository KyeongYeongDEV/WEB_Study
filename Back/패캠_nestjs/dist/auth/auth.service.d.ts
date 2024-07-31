import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { RefreshToken } from './entity/refresh-token.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    private refreshTokenRepository;
    constructor(userService: UserService, jwtService: JwtService, refreshTokenRepository: Repository<RefreshToken>);
    validateUser(email: string, password: string): Promise<any>;
    signup(email: string, password: string): Promise<import("../user/entity/user.entity").User>;
    signin(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(token: string, userId: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    private generateAccessToken;
    private generateRefreshToken;
    private createRefreshTokenUsingUser;
}
