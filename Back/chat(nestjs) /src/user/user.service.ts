import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository : UserRepository
    ){}

    async isExistUserByEmail (email : string) : Promise <boolean> {
        try{
            return true;
        }catch(error){
            throw new Error(error);
        }
    }
}
