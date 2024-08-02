import { DataSource, Repository } from 'typeorm';
import { SignUpReqDto } from './dto/req.dto';
import { UserEntity } from './user.entity';
export declare class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource);
    createUser(signUpReqDto: SignUpReqDto): Promise<void>;
}
