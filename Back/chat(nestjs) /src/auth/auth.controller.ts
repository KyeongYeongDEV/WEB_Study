import { Body, Controller, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { AuthService } from './auth.service';
import { SignInReqDto, SignUpReqDto } from './dto/req.dto';
import { SignInResDto, SignUpResDto } from './dto/res.dto';

@ApiTags('auth')
@ApiExtraModels(SignInReqDto, SignUpReqDto)
@Controller('api/auth')
export class AuthController {
    constructor(
        private readonly authService : AuthService,
    ){}

    @Post('signup')
    @ApiPostResponse(SignUpResDto)
    async signUp(@Body() signUpReqDto : SignUpReqDto){
        return  this.authService.signUp(signUpReqDto);
    }

    @Post('signin') 
    @ApiPostResponse(SignInResDto)
    async signIn(@Body() signInReqDto: SignInReqDto){
        return this.authService.signIn(signInReqDto);
    }
}
