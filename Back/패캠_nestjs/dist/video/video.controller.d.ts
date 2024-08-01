/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
import { Response } from 'express';
import { VideoService } from './video.service';
import { CreateVideoReqDto, FindVideoReqDto } from './dto/req.dto';
import { CreateVideoResDto, FindVideoResDto } from './dto/res.dto';
import { UserAfterAuth } from 'src/common/dto/user.dto';
import { PageReqDto } from 'src/common/dto/req.dto';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    create(file: Express.Multer.File, { title }: CreateVideoReqDto, { id }: UserAfterAuth): Promise<CreateVideoResDto>;
    findAll({ page, size }: PageReqDto): Promise<{
        items: FindVideoResDto[];
    }>;
    findOne({ id }: FindVideoReqDto): Promise<{
        id: string;
        title: string;
        user: {
            id: string;
            email: string;
        };
    }>;
    play({ id }: FindVideoReqDto, res: Response): Promise<StreamableFile>;
}
