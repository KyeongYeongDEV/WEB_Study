import { Board } from './board.model';
import { BoardsService } from './boards.service';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getAllBoard(): Board[];
    createBoard(title: string, description: string): Board;
}
