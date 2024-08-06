import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MessageEntity } from "./message.entity";
import { UserEntity } from "./user.entity";

@Entity()
export class ChatRoomEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    cr_id : number;
    
    @Column({nullable : false})
    u_id : number; //방장

    @Column({nullable : false})
    title : string;

    @Column()
    create_at : Date;

    @ManyToOne(type => UserEntity, user => user.chatRooms)
    user : UserEntity

    @OneToMany(type => MessageEntity, message => message.cr_id, {eager : true})
    messages : MessageEntity[]
}