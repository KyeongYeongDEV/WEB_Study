import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/domain/user/user.repositoty';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        @Inject('UserRepository')
        private userRepository: UserRepository,
        private jwtService : JwtService,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.createUser(authCredentialsDto);
    }

    async signIn(authCredentialsDto : AuthCredentialsDto) : Promise<{accessToken : string}> {
        const {username, password} = authCredentialsDto;
        const user = await this.userRepository.findOne({ where :  {username} });

        if (user && (await bcrypt.compare(password, user.password))){
            //유저토큰 생성 (Secret + Payload)
            const payload = {username}    //비밀번호 같이 중요한 정보 빼고 넣어줄 수 있다
            const accessToken = await this.jwtService.sign(payload);

            return {accessToken};
        }else{
            throw new UnauthorizedException('login failed');
        }
    }
}
