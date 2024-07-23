import { BaseEntity } from 'typeorm';
import { BoardStatus } from './board-status.enum';
export declare class BoardEntity extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: BoardStatus;
}
