import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from 'class-transformer'
import { IsInt } from "class-validator";

export class PageReqDto{
    @ApiPropertyOptional({description : '페이지.default = 1'}) //필수가 아닌 property에 대한 데코레이터
    @Transform(param => Number(param.value)) //쿼리스트링으로 넘어오는 값은 항상 string이다 하지만 우리가 다뤄야 할 타입은 number이기 때문에 타입을 바꿔준다.
    @IsInt()
    page ?: number = 1;

    @ApiPropertyOptional({description : '페이지당 데이터 갯수. default = 20'})
    @Transform(param => Number(param.value))
    @IsInt()
    size ?: number = 20
}