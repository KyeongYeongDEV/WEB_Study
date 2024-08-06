import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { UserEntity } from '../user/user.entity';

@Module({
    imports : [
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '60m' },
        }),
    ],
    controllers : [AuthController],
    providers : [
        AuthService,
        UserRepository,
    ]
})
export class AuthModule {}
