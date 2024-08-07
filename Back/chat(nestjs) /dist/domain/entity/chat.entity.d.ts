import { BaseEntity } from 'typeorm';
import { MessageEntity } from './message.entity';
import { UserEntity } from './user.entity';
export declare class ChatRoomEntity extends BaseEntity {
    cr_id: number;
    title: string;
    createdAt: Date;
    participants: UserEntity[];
    messages: MessageEntity[];
}
