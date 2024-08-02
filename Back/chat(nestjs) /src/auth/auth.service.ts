import { Injectable } from '@nestjs/common';
import { SignInReqDto, SignUpReqDto } from './dto/req.dto';

@Injectable()
export class AuthService {
    constructor(){
        
    }
    
    async signUp( signUpDto :SignUpReqDto ) : Promise <void>{
        
    }

    async signIn( signInDto : SignInReqDto ) : Promise <void>{
        
    }

}
