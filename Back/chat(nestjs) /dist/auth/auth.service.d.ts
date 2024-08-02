import { SignInReqDto, SignUpReqDto } from './dto/req.dto';
export declare class AuthService {
    constructor();
    signUp(signUpDto: SignUpReqDto): Promise<void>;
    signIn(signInDto: SignInReqDto): Promise<void>;
}
