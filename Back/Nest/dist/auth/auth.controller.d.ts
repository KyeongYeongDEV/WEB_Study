import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    test(req: any): void;
}
