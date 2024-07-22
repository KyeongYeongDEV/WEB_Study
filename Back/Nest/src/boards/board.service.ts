import { Injectable, NotFoundException } from '@nestjs/common';
import {Board, BoardStatus} from "./board.model";
import {v1 as uuid} from "uuid";
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards : Board[];

    constructor(){
        this.boards = [];
    }

    getAllBoards() : Board[]{
        return this.boards;
    }

    createBoard(createBoardDto : CreateBoardDto) : Board{
        const {title, description} = createBoardDto;
        const board : Board = {
            id : uuid(),
            title,
            description,
            status : BoardStatus.PUBLIC
        }

        this.boards.push(board);

        return board;
    }

    getBoardById(id : string) : Board{
        const found = this.boards.find((board)=>{ board.id === id});

        if(!found){
            throw new NotFoundException(`Can't find Board with id : ${id}`);
        }

        return found
    }

    deleteBoard(id : string) : void{
        const found = this.getBoardById(id);
        
        // filter를 이용해 id가 다른 것만 남겨준다.
        this.boards = this.boards.filter((board) => board.id !== found.id);
    }

    updateBoardStatus(id : string, status : BoardStatus) : Board{
        const board = this.getBoardById(id);
        board.status = status;

        return board;
    }
}
