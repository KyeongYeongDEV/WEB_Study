import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserEntity } from '../domain/entity/user.entity';
import { UserRepository } from 'src/user/user.repository';

@Module({
    imports : [
        TypeOrmModule.forFeature([UserEntity, UserRepository]),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '60m' },
        }),
    ],
    controllers : [AuthController],
    providers : [
        AuthService,
    ]
})
export class AuthModule {}
