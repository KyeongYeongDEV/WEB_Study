import { Query } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { PageReqDto } from 'src/common/dto/req.dto';
import { CreateVideoReqDto, FindVideoReqDto } from './dto/req.dto';
import { VideoService } from './video.service';

@ApiTags('Video')
@ApiExtraModels(FindVideoReqDto, PageReqDto)
@Controller('api/videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  upload(@Body() createVideoReqDto : CreateVideoReqDto ) {
    return this.videoService.create();
  }

  @Get()
  findAll(@Query() {page, size} : PageReqDto) {
    return this.videoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') {id} : FindVideoReqDto) {
    return this.videoService.findOne(id);
  }

  @Get(':id/download')
  async download(@Param('id') {id}: FindVideoReqDto) {
    return this.videoService.download(id);
  }
}
