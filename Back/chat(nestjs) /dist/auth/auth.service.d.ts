import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { SignInReqDto, SignUpReqDto } from './dto/req.dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp({ name, email, password, passwordComfirm }: SignUpReqDto): Promise<any>;
    signIn({ email, password }: SignInReqDto): Promise<{
        accessToken: string;
    }>;
}
