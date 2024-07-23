import { DataSource, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { UserEntity } from "../domain/user/user.entity";
export declare class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource);
    createUser(authCredentialsDto: AuthCredentialsDto): Promise<void>;
}
