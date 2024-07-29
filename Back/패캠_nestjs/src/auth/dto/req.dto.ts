import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, Matches, MaxLength} from 'class-validator';

export class SignupReqDto{
    @ApiProperty({required : true, example : 'nestjs@fastcampus.com'})
    @IsEmail()
    @MaxLength(30)
    email : string;

    @ApiProperty({required : true, example : 'Password1!'})
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,30}$/) //숫자, 소문자, 대문자, 특수문자 하나 이상을 들어있는지 검사하는 정규식
    password : string;

    @ApiProperty({required : true, example : 'Password1!'})
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,30}$/)
    passwordConfirm : string;
}

export class SigninReqDto{
    @ApiProperty({required : true, example : 'nestjs@fastcampus.com'})
    @IsEmail()
    @MaxLength(30)
    email : string;

    @ApiProperty({required : true, example : 'Password1!'})
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,30}$/)
    password : string;
}