import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AuthCredentialsDto } from '../../auth/dto/auth-credential.dto';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcryptjs';

export class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.create({username, password : hashedPassword});

        // 중복 확인
        const existingUser = await this.findOne({ where: { username } });
        if (existingUser) {
            throw new ConflictException('Username already exists');
        }

        try {
            this.save(user);
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
