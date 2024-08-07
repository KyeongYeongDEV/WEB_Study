import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, NumericType, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MessageEntity } from './message.entity';
import { UserEntity } from './user.entity';

@Entity('chat_rooms')
export class ChatRoomEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    cr_id: number;

    @Column({ nullable: false })
    title: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => UserEntity, user => user.chatRooms, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' }) // 외래 키 컬럼 이름을 'user_id'로 지정
    user: number[];

    @OneToMany(() => MessageEntity, message => message.chatRoom, { eager: true })
    messages: MessageEntity[];
}
