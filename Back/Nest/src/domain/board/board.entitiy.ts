import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from '../../boards/board-status.enum';
import { UserEntity } from '../user/user.entity';

@Entity()
export class BoardEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;

    @ManyToOne(type => UserEntity, user => user.boards, {eager : false})
    user : UserEntity;
}
