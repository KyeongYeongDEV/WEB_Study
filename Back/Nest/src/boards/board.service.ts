import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BoardEntity } from "./board.entitiy";
import { BoardsRepository } from "./board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardsRepository)
        private boardRepostitory : BoardsRepository,
    ){}

    async getBoardById(id : number) : Promise<BoardEntity>{
        const found = await this.boardRepostitory.findOne(id);

        if(!found){
            throw new NotFoundeException(`Can't find Board with id ${id}`)
        }

        return found;
    }   
    create(createBoardDto : CreateBoardDto){
        return 'This action adds a new board';
    }
}