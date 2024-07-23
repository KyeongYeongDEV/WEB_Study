import { BoardStatus } from "./board-status.enum";
import { BoardEntity } from "./board.entitiy";
import { BoardsRepository } from "./board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";
export declare class BoardsService {
    private boardsRepository;
    constructor(boardsRepository: BoardsRepository);
    getBoardById(id: number): Promise<BoardEntity>;
    getAllBoards(): Promise<BoardEntity[]>;
    createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity>;
    deletetBoard(id: number): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<BoardEntity>;
}
