import { Inject, Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repositoty';

@Injectable()
export class AuthService {
    constructor(
        @Inject('UserRepository')
        private userRepository : UserRepository
    ){}

    async signUp(authCredentialsDto : AuthCredentialsDto) : Promise<void>{
        return this.userRepository.createUser(authCredentialsDto);
    }
}
