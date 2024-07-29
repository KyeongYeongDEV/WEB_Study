import { ApiProperty } from "@nestjs/swagger";
import { toUSVString } from "util";

export class FindUserResDto{
    @ApiProperty({required : true})
    id : string;

    @ApiProperty({required : true})
    email : string;

    @ApiProperty({required : true})
    createAt : string;
}