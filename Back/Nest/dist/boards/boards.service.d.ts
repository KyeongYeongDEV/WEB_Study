import { Board } from "./board.model";
export declare class BoardsService {
    private boards;
    constructor();
    getAllBoards(): Board[];
    createBoard(title: string, description: string): Board;
}
