import { BoardStatus } from "./board-status.enum";
import { BoardEntity } from "../domain/board/board.entitiy";
import { BoardsRepository } from "../domain/board/board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UserEntity } from "src/domain/user/user.entity";
export declare class BoardsService {
    private boardsRepository;
    constructor(boardsRepository: BoardsRepository);
    getBoardById(id: number): Promise<BoardEntity>;
    getAllBoards(user: UserEntity): Promise<BoardEntity[]>;
    createBoard(createBoardDto: CreateBoardDto, user: UserEntity): Promise<BoardEntity>;
    deletetBoard(id: number, user: UserEntity): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<BoardEntity>;
}
