import { AuthService } from './auth.service';
import { SignInReqDto, SignUpReqDto } from './dto/req.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpReqDto: SignUpReqDto): Promise<any>;
    signIn(signInReqDto: SignInReqDto): Promise<{
        accessToken: string;
    }>;
}
