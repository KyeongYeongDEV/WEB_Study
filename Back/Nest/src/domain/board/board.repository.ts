import { NotFoundException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { BoardStatus } from "../../boards/board-status.enum";
import {BoardEntity} from "./board.entitiy"
import { CreateBoardDto } from "../../boards/dto/create-board.dto";
import { UserEntity } from "../user/user.entity";


export class BoardsRepository extends Repository<BoardEntity> {
    constructor(dataSource: DataSource) {
        super(BoardEntity, dataSource.createEntityManager());
    }

    async getBoardById(id: number): Promise<BoardEntity> {
        const found = await this.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }

    async getAllBoards() : Promise <BoardEntity[]>{
        return this.find();
    }

    async createBoard(createBoardDto: CreateBoardDto, user : UserEntity): Promise<BoardEntity> {
        const { title, description } = createBoardDto;

        const board = this.create({
            title,
            description,
            status: BoardStatus.PUBLIC,
            user
        });

        await this.save(board);
        return board;
    }

    async deleteBoard(id : number) : Promise<void> {
        const result = await this.delete(id);

        if(result.affected === 0) throw new NotFoundException(`Can't find Board with id ${id}`);

        return ;
    }

    async updateBoardStatus(id : number, status : BoardStatus) : Promise<BoardEntity>{
        const board = await this.getBoardById(id);

        board.status = status;
        await this.save(board);

        return board;
    }
}