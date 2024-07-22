import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BoardsRepository } from "./board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardsRepository)
        private boardRepostitory : BoardsRepository,
    ){}


    create(createBoardDto : CreateBoardDto){
        return 'This action adds a new board';
    }
}