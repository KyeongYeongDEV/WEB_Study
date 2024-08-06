import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/entity/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { SignInReqDto, SignUpReqDto } from './dto/req.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository  : UserRepository,
        private readonly jwtService : JwtService,
    ){}
    
    async signUp( { name, email, password, passwordComfirm } :SignUpReqDto ) : Promise <any>{
        const foundUser : Promise<UserEntity> = this.userRepository.findUserByEmail(email)
        
        if(!foundUser)  throw new BadRequestException("이미 존재하는 회원");
        
        if (password !== passwordComfirm) {
            throw new Error("비밀번호가 일치하지 않습니다");
        } 

        return {
            message : "성공적으로 가입했습니다"
        }
    }

    async signIn( {email, password} : SignInReqDto ) {
        const foundUser : Promise<UserEntity> = this.userRepository.findUserByEmail(email)

        if (!foundUser) throw new BadRequestException('존재하지 않은 회원입니다.');
        if (password !== (await foundUser).password) throw new BadRequestException("비밀번호가 일치하지 않습니다");

        return {accessToken : this.jwtService.sign({sub : (await foundUser).email})}
    }
}
