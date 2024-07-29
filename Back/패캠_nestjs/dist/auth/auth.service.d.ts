import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateUser(email: string, password: string): Promise<any>;
    signup(email: string, password: string): Promise<void>;
    signin(user: any): Promise<void>;
}
