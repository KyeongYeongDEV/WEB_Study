import { ChatRoomEntity } from "src/domain/entity/chat.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    u_id : number;

    @Column()
    email : string;

    @Column()
    name : string;

    @Column()
    password : string;
    
    // 회원 한 명이 여러 개의 게시물을 쓸 수 있기 때문에 회원과 게시글의 관계는 1대다이다  
    //board => board.user는 BoardEntity의 user 속성과 연결됨을 나타냄
    // @OneToMany(type => BoardEntity, board => board.user, {eager : true})
    // boards : BoardEntity[]

    @OneToMany(type => ChatRoomEntity, chatRoom => chatRoom.u_id, {eager : true})
    chatRooms : ChatRoomEntity[]
}