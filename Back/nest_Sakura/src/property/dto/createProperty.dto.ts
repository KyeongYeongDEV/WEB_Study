import { IsInt, IsString, Length } from "class-validator";

export class CreatePropertyDto{
    @IsString()
    @Length(2,10) //길이가 최소 2에서 10까지 그 외면 오류
    //@Length(2,10,{message : 'error on len'}) // error message 설정 가능
    name : string

    @IsString()
    @Length(2,10 , {groups : ['create']})
    @Length(1, 15, {groups : ['update']})
    description : string;

    @IsInt()
    area : number;
}