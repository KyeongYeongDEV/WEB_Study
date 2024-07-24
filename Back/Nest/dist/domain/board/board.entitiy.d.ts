import { BaseEntity } from 'typeorm';
import { BoardStatus } from '../../boards/board-status.enum';
import { UserEntity } from '../user/user.entity';
export declare class BoardEntity extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: BoardStatus;
    user: UserEntity;
}
