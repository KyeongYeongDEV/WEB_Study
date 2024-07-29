import { PageReqDto } from 'src/common/dto/req.dto';
import { CreateVideoReqDto, FindVideoReqDto } from './dto/req.dto';
import { VideoService } from './video.service';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    upload(createVideoReqDto: CreateVideoReqDto): Promise<string>;
    findAll({ page, size }: PageReqDto): Promise<string>;
    findOne({ id }: FindVideoReqDto): Promise<string>;
    download({ id }: FindVideoReqDto): Promise<string>;
}
