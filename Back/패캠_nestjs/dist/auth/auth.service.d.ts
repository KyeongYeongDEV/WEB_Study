import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signup(email: string, password: string): Promise<import("../user/entity/user.entity").User>;
    signin(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
