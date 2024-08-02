import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { SignUpReqDto } from './dto/req.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
    }

    async createUser(signUpReqDto: SignUpReqDto): Promise<void> {
    const { name, email, password } = signUpReqDto;

    const user = this.create({ email, name, password });

    try {
      // 저장
        await this.save(user);
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Could not create user');
    }
    }
}
 