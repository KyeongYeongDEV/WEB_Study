import { ApiProperty } from "@nestjs/swagger";

export class FindUserReqDto{
    @ApiProperty({required : true}) //Swagger 데코레이터 
    id : string
}