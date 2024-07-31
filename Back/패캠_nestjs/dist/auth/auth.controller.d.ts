import { AuthService } from './auth.service';
import { SigninReqDto, SignupReqDto } from './dto/req.dto';
import { UserAfterAuth } from 'src/common/decorator/user.decorator';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup({ email, password, passwordConfirm }: SignupReqDto): Promise<{
        id: string;
    }>;
    signin({ email, password }: SigninReqDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(authorization: any, user: UserAfterAuth): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
