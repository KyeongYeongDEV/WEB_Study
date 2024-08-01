import { AuthService } from './auth.service';
import { SigninResDto, SignupResDto } from './dto/res.dto';
import { SigninReqDto, SignupReqDto } from './dto/req.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup({ email, password, passwordConfirm }: SignupReqDto): Promise<SignupResDto>;
    signin({ email, password }: SigninReqDto): Promise<SigninResDto>;
}
