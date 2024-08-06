import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChatRoomEntity } from "./chat.entity";

@Entity()
export class MessageEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    m_id : number;
    
    @Column({nullable : false})
    cr_id : number;
    
    @Column({nullable : false})
    sender_id : number;

    @Column({nullable : false})
    content : string;

    @Column()
    create_at : Date;

    @ManyToOne(type => ChatRoomEntity, chatRoom => chatRoom.messages)
    chatRoom : ChatRoomEntity

}