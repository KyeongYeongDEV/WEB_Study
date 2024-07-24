import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { BoardStatus } from "./board-status.enum";
import { BoardEntity } from "../domain/board/board.entitiy";
import { BoardsRepository } from "../domain/board/board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UserEntity } from "src/domain/user/user.entity";
import { resourceLimits } from "worker_threads";

@Injectable()
export class BoardsService { 
    constructor(
        @Inject('BoardsRepository')
        private boardsRepository: BoardsRepository,
    ) {}

    async getBoardById (id : number) : Promise<BoardEntity>{
        return this.boardsRepository.getBoardById(id);
    }

    async getAllBoards(
        user : UserEntity
    ) : Promise<BoardEntity[]>{
        const query = this.boardsRepository.createQueryBuilder('board');
        query.where('board.userId = :userId', {userId : user.id});

        const boards = await query.getMany();
        return boards;
    }

    async createBoard(createBoardDto: CreateBoardDto, user : UserEntity): Promise<BoardEntity> {
        return this.boardsRepository.createBoard(createBoardDto, user);
    }

    async deletetBoard( id : number, user : UserEntity) : Promise<void> {
        const result = await this.boardsRepository.delete({id, user});

        if (result.affected === 0){
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return;
    }

    async updateBoardStatus(id: number, status: BoardStatus): Promise<BoardEntity> {
        return this.boardsRepository.updateBoardStatus(id, status);
    }
}