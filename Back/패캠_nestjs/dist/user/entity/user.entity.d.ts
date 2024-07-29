import { Video } from 'src/video/entity/video.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    videos: Video[];
}
