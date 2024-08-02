import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(){}

    @Post('signup')
    async signUp(@Body() body : any){
        return body;
    }

    @Post('signin')
    async signIn(@Body() body : any){
        return body;
    }
}
