import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { UserEntity } from './user.entity';

@Module({
    controllers : [AuthController],
    providers : [
        AuthService,
        UserRepository,
    ]
})
export class AuthModule {}
