import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { BoardStatus } from "./board-status.enum";
import {BoardEntity} from "./board.entitiy"
import { CreateBoardDto } from "./dto/create-board.dto";

@Injectable()
export class BoardsRepository{
    private boardsRepository : Repository<BoardEntity>;

    constructor(private readonly dataSource : DataSource){
        this.boardsRepository = this.dataSource.getRepository(BoardEntity);
    }

    createboard(createBoardDto : CreateBoardDto){
        const {title, description} = createBoardDto;
        const board = this.boardsRepository.create({
            title,
            description,
            status : BoardStatus.PRIVATE
        })
        
        return this.boardsRepository.save(board);
    }
}