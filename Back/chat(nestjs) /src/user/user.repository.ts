import { Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "src/domain/entity/user.entity";
import { DataSource, Repository } from "typeorm";
import { CreateUserRequestDTO } from "./dto/req.dto";

@Injectable()
export class UserRepository extends Repository<UserEntity>{
    constructor(dataSource : DataSource){
        super(UserEntity, dataSource.createEntityManager());
    }

    async createUser({ name, email, password }: CreateUserRequestDTO): Promise<any> {   
        try{
            const user = this.create({ email, name, password });
            await this.save(user);

            return user.email;
        } catch(error){
            throw new Error(error);
        }
    }

    async findUserByEmail(email : string) :Promise<UserEntity> {
        try{
            const foundUser : UserEntity = await this.findOne({
                where : {email : email}
            });

            if(!foundUser) throw new NotFoundException("존재하지 않은 회원입니다");

            return foundUser;
        }catch(error){
            throw new Error(error);
        }
    }   


}