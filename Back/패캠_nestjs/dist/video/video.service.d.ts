import { Repository } from 'typeorm';
import { Video } from './entity/video.entity';
export declare class VideoService {
    private videoRepository;
    constructor(videoRepository: Repository<Video>);
    create(): Promise<string>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    download(id: string): Promise<string>;
}
