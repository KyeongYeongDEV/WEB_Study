import { BaseEntity } from 'typeorm';
import { MessageEntity } from './message.entity';
export declare class ChatRoomEntity extends BaseEntity {
    cr_id: number;
    title: string;
    createdAt: Date;
    user: number[];
    messages: MessageEntity[];
}
