import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthController } from './auth.controller';
import { UserRepository } from '../domain/user/user.repositoty';
import { AuthService } from './auth.service';
import { UserEntity } from '../domain/user/user.entity';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({defaultStrategy : 'jwt'}),
    JwtModule.register({
      secret : 'secret',
      signOptions:{
        expiresIn : 60 * 60,
      }
    }),
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'UserRepository',
      useFactory: (dataSource: DataSource) => {
        return new UserRepository(dataSource);
      },
      inject: [DataSource],
    },
  ],
})
export class AuthModule {}