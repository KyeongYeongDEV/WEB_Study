import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChatRoomEntity } from "./chat.entity";

@Entity()
export class MessageEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    m_id : number;
    
    @Column()
    cr_id : number;
    
    @Column()
    sender_id : number;

    @Column()
    content : string;

    @Column()
    create_at : string;

    @ManyToOne(type => ChatRoomEntity, chatRoom => chatRoom.messages)
    chatRoom : ChatRoomEntity

}