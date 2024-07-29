import { AuthService } from './auth.service';
import { SigninReqDto, SignupReqDto } from './dto/req.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup({ email, password, passwordConfirm }: SignupReqDto): Promise<{
        id: string;
    }>;
    signin({ email, password }: SigninReqDto): Promise<{
        accessToken: string;
    }>;
}
