import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

    @OneToMany(() => ChatRoomEntity, chatRoom => chatRoom.user, { eager: true })
    chatRooms: ChatRoomEntity[];
}
