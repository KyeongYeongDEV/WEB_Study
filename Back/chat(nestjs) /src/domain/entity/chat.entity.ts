import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MessageEntity } from "./message.entity";
import { UserEntity } from "./user.entity";

@Entity()
export class ChatRoomEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    cr_id : number;
    
    @Column()
    u_id : number; //방장

    @Column()
    title : string;

    @Column()
    create_at : Date;

    @ManyToOne(type => UserEntity, user => user.chatRooms)
    user : UserEntity

    @OneToMany(type => MessageEntity, message => message.cr_id, {eager : true})
    messages : MessageEntity[]
}