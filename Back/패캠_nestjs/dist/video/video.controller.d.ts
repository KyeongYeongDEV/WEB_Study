import { VideoService } from './video.service';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    upload(): Promise<string>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    download(id: string): Promise<string>;
}
