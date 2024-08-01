/// <reference types="node" />
/// <reference types="node" />
import { ReadStream } from 'node:fs';
import { DataSource, Repository } from 'typeorm';
import { Video } from './entity/video.entity';
import { User } from 'src/user/entity/user.entity';
export declare class VideoService {
    private dataSource;
    private videoRepository;
    private userRepository;
    constructor(dataSource: DataSource, videoRepository: Repository<Video>, userRepository: Repository<User>);
    create(userId: string, title: string, mimetype: string, extension: string, buffer: Buffer): Promise<Video>;
    findAll(page: number, size: number): Promise<Video[]>;
    findOne(id: string): Promise<Video>;
    download(id: string): Promise<{
        stream: ReadStream;
        mimetype: string;
        size: number;
    }>;
    private uploadVideo;
}
