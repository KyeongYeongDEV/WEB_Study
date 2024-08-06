import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { SignInReqDto, SignUpReqDto } from './dto/req.dto';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(
        dataSource: DataSource
        ) {
        super(UserEntity, dataSource.createEntityManager());
    }

    async createUser(signUpReqDto: SignUpReqDto): Promise<any> {   
        try{
            const { name, email, password } = signUpReqDto;
            const user = this.create({ email, name, password });
            await this.save(user);

            return user.email;
        } catch(error){
            return {
                error : error,
                Sucess : false
            }
        }
    }

    async isExistUserByEmail (userEmail : string) : Promise <boolean> {
        const result = this.findOne({where : {email : userEmail}});

        if(result) return true;
        
        return false;
    }

    async signIn ( {email , password}: SignInReqDto) : Promise< boolean>{
        const user = await this.findOne({where : {email : email, password : password}});

        if(user){
            return true;
        }
        return false;
    }
}