import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/entity/user.entity';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports : [TypeOrmModule.forFeature([UserEntity, UserRepository])],
    providers : [UserService, UserRepository],
    exports : [UserService, UserRepository],
})
export class UserModule {}
