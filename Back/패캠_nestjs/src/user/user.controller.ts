import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiGetItensResponse, ApiGetResponse } from 'src/common/decorator/swagger.decorator';
import { PageReqDto } from 'src/common/dto/req.dto';
import { FindUserReqDto } from './dto/req.dto';
import { FindUserResDto } from './dto/res.dto';
import { UserService } from './user.service';

@ApiTags('User')
@ApiExtraModels(FindUserReqDto, FindUserResDto) //간혹 swagger에 안 보이는 경우가 있는데 이렇게 등록을 해주면 보인다
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @ApiGetItensResponse(FindUserResDto)
  @Get()
  findAll(@Query() {page, size} : PageReqDto) {
    return this.userService.findAll();
  }

  @ApiGetResponse(FindUserResDto)
  @Get(':id')
  findOne(@Param() {id} : FindUserReqDto) { // Swagger 데코레이터 활용 // controller에서 사용을 해줘야 Swagger 명세에서 보임
    return this.userService.findOne(id);
  }
}
 