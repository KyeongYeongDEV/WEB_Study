import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
//@Unique(['username'])
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

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
}