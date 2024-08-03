import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './auth.repository';
import { SignInReqDto, SignUpReqDto } from './dto/req.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository : UserRepository
    ){}
    
    async signUp( signUpReqDto :SignUpReqDto ) : Promise <any>{
        const { name, email, password, passwordComfirm } = signUpReqDto;

        if(this.userRepository.isExistUserByEmail(email))  throw new Error("이미 존재하는 회원");
        
        if (password !== passwordComfirm) {
            throw new Error("비밀번호가 일치하지 않습니다");
        } 

        return {
            message : "성공적으로 가입했습니다"
        }
    }

    async signIn( signInDto : SignInReqDto ) : Promise <string>{
        return this.userRepository.signIn(signInDto);
    }

}
