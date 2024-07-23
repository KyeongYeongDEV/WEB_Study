import { DataSource, Repository } from 'typeorm';
import { AuthCredentialsDto } from '../../auth/dto/auth-credential.dto';
import { UserEntity } from './user.entity';
export declare class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource);
    createUser(authCredentialsDto: AuthCredentialsDto): Promise<void>;
}
