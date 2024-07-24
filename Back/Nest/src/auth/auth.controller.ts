import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthGuard } from "@nestjs/passport"
import { GetUser } from './get-user.decorator';
import { UserEntity } from 'src/domain/user/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto : AuthCredentialsDto) : Promise<void>{
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto : AuthCredentialsDto ) : Promise<{accessToken : string}>{
        return this.authService.signIn(authCredentialsDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard('jwt'))
    test(@GetUser() user : UserEntity){
        console.log('user ', user)
    }
}
