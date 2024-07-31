import { RefreshToken } from 'src/auth/entity/refresh-token.entity';
import { Role } from 'src/auth/enum/user.enum';
import { Video } from 'src/video/entity/video.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    videos: Video[];
    refreshToken: RefreshToken;
}
