import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './auth.repository';
import { SignInReqDto, SignUpReqDto } from './dto/req.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository : UserRepository,
        private readonly jwtService : JwtService,
    ){}
    
    async signUp( signUpReqDto :SignUpReqDto ) : Promise <any>{
        const { name, email, password, passwordComfirm } = signUpReqDto;

        if(this.userRepository.isExistUserByEmail(email))  throw new BadRequestException("이미 존재하는 회원");
        
        if (password !== passwordComfirm) {
            throw new Error("비밀번호가 일치하지 않습니다");
        } 

        return {
            message : "성공적으로 가입했습니다"
        }
    }

    async signIn( signInDto : SignInReqDto ) {
        const result : Promise<boolean> =  this.userRepository.signIn(signInDto);

        if(result)  {
            return {accessToken : this.jwtService.sign({sub : signInDto.email})}
        }else{
            return {message : "fail to login"};
        }
    }

}
