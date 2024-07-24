import { DataSource, Repository } from "typeorm";
import { BoardStatus } from "../../boards/board-status.enum";
import { BoardEntity } from "./board.entitiy";
import { CreateBoardDto } from "../../boards/dto/create-board.dto";
import { UserEntity } from "../user/user.entity";
export declare class BoardsRepository extends Repository<BoardEntity> {
    constructor(dataSource: DataSource);
    getBoardById(id: number): Promise<BoardEntity>;
    getAllBoards(): Promise<BoardEntity[]>;
    createBoard(createBoardDto: CreateBoardDto, user: UserEntity): Promise<BoardEntity>;
    deleteBoard(id: number): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<BoardEntity>;
}
