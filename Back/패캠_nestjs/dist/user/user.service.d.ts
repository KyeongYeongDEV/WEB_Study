import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    create(email: string, password: string): Promise<string>;
    findOneByEmail(email: string): Promise<string>;
}
