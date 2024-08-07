import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ChatRoomEntity } from './chat.entity';


@Entity('users')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    u_id: number;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    password: string;

    @ManyToMany(() => ChatRoomEntity, chatRoom => chatRoom.participants, { eager: true })
    chatRooms: ChatRoomEntity[];
}
