import { Query } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiGetItensResponse, ApiGetResponse, ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { PageReqDto } from 'src/common/dto/req.dto';
import { PageResDto } from 'src/common/dto/res.dto';
import { CreateVideoReqDto, FindVideoReqDto } from './dto/req.dto';
import { CreateVideoResDto, FindVideoResDto } from './dto/res.dto';
import { VideoService } from './video.service';


@ApiTags('Video')
@ApiExtraModels(FindVideoReqDto, PageReqDto,FindVideoResDto, PageResDto)
@Controller('api/videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @ApiBearerAuth()
  @ApiPostResponse(CreateVideoResDto)
  @Post()
  upload(@Body() createVideoReqDto : CreateVideoReqDto ) {
    return this.videoService.create();
  }

  @ApiBearerAuth()
  @ApiGetItensResponse(FindVideoReqDto)
  @Get()
  findAll(@Query() {page, size} : PageReqDto) {
    return this.videoService.findAll();
  }

  @ApiBearerAuth()
  @ApiGetResponse(FindVideoResDto)
  @Get(':id')
  findOne(@Param('id') {id} : FindVideoReqDto) {
    return this.videoService.findOne(id);
  }

  @ApiBearerAuth() // signin, signup을 제외한 모든 곳에 Bear를 달아주었다
  @Get(':id/download')
  async download(@Param('id') {id}: FindVideoReqDto) {
    return this.videoService.download(id);
  }
}
