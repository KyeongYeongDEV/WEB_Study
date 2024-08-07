import { BaseEntity } from 'typeorm';
import { ChatRoomEntity } from './chat.entity';
export declare class UserEntity extends BaseEntity {
    u_id: number;
    email: string;
    name: string;
    password: string;
    chatRooms: ChatRoomEntity[];
}
