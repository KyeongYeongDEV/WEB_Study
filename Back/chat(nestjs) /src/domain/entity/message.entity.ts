import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ChatRoomEntity } from './chat.entity';

@Entity('messages')
export class MessageEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    m_id: number;

    @Column({ nullable: false })
    sender_id: number;

    @Column({ nullable: false })
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => ChatRoomEntity, chatRoom => chatRoom.messages)
    @JoinColumn({ name: 'cr_id' })
    chatRoom: ChatRoomEntity;
}
