import { AuthService } from './auth.service';
import { SigninReqDto, SignupReqDto } from './dto/req.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signupReqDto: SignupReqDto): Promise<void>;
    signin(signinReqDto: SigninReqDto): Promise<void>;
}
