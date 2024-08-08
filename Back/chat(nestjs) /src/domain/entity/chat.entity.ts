import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, NumericType, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

    @ManyToMany(() => UserEntity, user => user.chatRooms, { cascade: true })
    @JoinTable({
        name: 'chat_room_participants', 
        joinColumn: { name: 'chat_room_id', referencedColumnName: 'cr_id' },
        inverseJoinColumn: { name: 'user_id', referencedColumnName: 'u_id' }
    })
    participants: UserEntity[];

    @OneToMany(() => MessageEntity, message => message.chatRoom, { eager: true })
    messages: MessageEntity[];
}
