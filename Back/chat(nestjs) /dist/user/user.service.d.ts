import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    isExistUserByEmail(email: string): Promise<boolean>;
}
