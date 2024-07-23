import { Inject, Injectable } from "@nestjs/common";
import { BoardStatus } from "./board-status.enum";
import { BoardEntity } from "./board.entitiy";
import { BoardsRepository } from "./board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
    constructor(
        @Inject('BoardsRepository')
        private boardsRepository: BoardsRepository,
    ) {}

    async getBoardById (id : number) : Promise<BoardEntity>{
        return this.boardsRepository.getBoardById(id);
    }

    async getAllBoards() : Promise<BoardEntity[]>{
        return this.boardsRepository.getAllBoards();
    }

    async createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
        return this.boardsRepository.createBoard(createBoardDto);
    }

    async deletetBoard( id : number) : Promise<void> {
        this.boardsRepository.delete(id);

        return;
    }

    async updateBoardStatus(id: number, status: BoardStatus): Promise<BoardEntity> {
        return this.boardsRepository.updateBoardStatus(id, status);
    }
}