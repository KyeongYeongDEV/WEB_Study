import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService : AuthService,
    ){}

    @Post('signup')
    async signUp(@Body() body : any){
        return  this.authService.signUp(body);
    }

    @Post('signin') 
    async signIn(@Body() body : any){
        return this.authService.signIn(body);
    }
}
