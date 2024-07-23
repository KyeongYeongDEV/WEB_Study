import { DataSource, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { UserEntity } from "./user.entity";

export class UserRepository extends Repository<UserEntity>{
    constructor(dataSource : DataSource){
        super(UserEntity, dataSource.createEntityManager());
    }

    async createUser(authCredentialsDto : AuthCredentialsDto) : Promise<void>{
        const {username, password} = authCredentialsDto;
        const user = this.create({username, password});

        await this.save(user);
    }
}