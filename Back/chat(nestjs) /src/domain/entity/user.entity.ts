import { ChatRoomEntity } from "src/domain/entity/chat.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    u_id : number;

    @Column({nullable : false})
    email : string;

    @Column({nullable : false})
    name : string;

    @Column({nullable : false})
    password : string;

    @OneToMany(type => ChatRoomEntity, chatRoom => chatRoom.u_id, {eager : true})
    chatRooms : ChatRoomEntity[]
}