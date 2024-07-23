import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/domain/user/user.repositoty';
import { Auth } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(
        @Inject('UserRepository')
        private userRepository: UserRepository,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
    }

    async signIn(authCredentialsDto : AuthCredentialsDto) : Promise<string> {
        const {username, password} = authCredentialsDto;
        const user = await this.userRepository.findOne({ where :  {username} });

        if (user && (await bcrypt.compare(password, user.password))){
            return 'login success';
        }else{
            throw new UnauthorizedException('login failed');
        }
    }
}
