import { BoardStatus } from './board-status.enum';
import { BoardEntity } from '../domain/board/board.entitiy';
import { BoardsService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UserEntity } from 'src/domain/user/user.entity';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    getBoardById(id: number): Promise<BoardEntity>;
    getAllBoard(): Promise<BoardEntity[]>;
    createBoard(createBoardDto: CreateBoardDto, user: UserEntity): Promise<BoardEntity>;
    deleteBoard(id: any): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<BoardEntity>;
}
