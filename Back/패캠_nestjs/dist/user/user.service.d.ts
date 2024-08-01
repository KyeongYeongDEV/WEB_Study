import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(page: number, size: number): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(email: string, password: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
}
