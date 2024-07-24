import { BaseEntity } from "typeorm";
import { BoardEntity } from "../board/board.entitiy";
export declare class UserEntity extends BaseEntity {
    id: number;
    username: string;
    password: string;
    boards: BoardEntity[];
}
