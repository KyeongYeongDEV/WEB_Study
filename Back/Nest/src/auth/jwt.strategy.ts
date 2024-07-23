import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt"
import { PassportStrategy } from "@nestjs/passport";
import { UserRepository } from "src/domain/user/user.repositoty";
import { UserEntity } from "src/domain/user/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @Inject('UserRepository')
        private userRepository : UserRepository
    ){
        super({
            secretOrKey : 'secret',
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    async validate(payload : any){
        const { username } = payload;
        const user : UserEntity = await this.userRepository.findOne({where : {username}});

        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}