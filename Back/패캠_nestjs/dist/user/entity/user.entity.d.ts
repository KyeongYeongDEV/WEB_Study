import { Video } from 'src/video/entity/video.entity';
import { UserRole } from '../enum/user.enum';
export declare class User {
    id: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    videos: Video[];
}
