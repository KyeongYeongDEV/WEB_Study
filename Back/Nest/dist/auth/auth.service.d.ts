import { UserRepository } from 'src/domain/user/user.repositoty';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: UserRepository);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<string>;
}
