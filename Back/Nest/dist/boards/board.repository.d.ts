import { DataSource, Repository } from "typeorm";
import { BoardStatus } from "./board-status.enum";
import { BoardEntity } from "../domain/board/board.entitiy";
import { CreateBoardDto } from "./dto/create-board.dto";
export declare class BoardsRepository extends Repository<BoardEntity> {
    constructor(dataSource: DataSource);
    getBoardById(id: number): Promise<BoardEntity>;
    getAllBoards(): Promise<BoardEntity[]>;
    createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity>;
    deleteBoard(id: number): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<BoardEntity>;
}
