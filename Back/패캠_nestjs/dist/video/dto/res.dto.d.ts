import { Video } from '../entity/video.entity';
export declare class CreateVideoResDto {
    id: string;
    title: string;
    static toDto({ id, title }: Video): {
        id: string;
        title: string;
    };
}
export declare class VideoUserDto {
    id: string;
    email: string;
}
export declare class FindVideoResDto {
    id: string;
    title: string;
    user: VideoUserDto;
    static toDto({ id, title, user: { id: userId, email } }: Video): {
        id: string;
        title: string;
        user: {
            id: string;
            email: string;
        };
    };
}
