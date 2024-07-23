import { DataSource, Repository } from "typeorm";
import { UserEntity } from "./user.entity";
export declare class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource);
}
