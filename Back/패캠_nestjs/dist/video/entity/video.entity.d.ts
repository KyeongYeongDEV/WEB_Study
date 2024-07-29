import { User } from 'src/user/entity/user.entity';
export declare class Video {
    id: string;
    title: string;
    mimetype: string;
    downloadCnt: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
