import { BaseEntity } from 'typeorm';
import { ChatRoomEntity } from './chat.entity';
export declare class MessageEntity extends BaseEntity {
    m_id: number;
    sender_id: number;
    content: string;
    createdAt: Date;
    chatRoom: ChatRoomEntity;
}
