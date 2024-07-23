import { NotFoundException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { BoardStatus } from "./board-status.enum";
import {BoardEntity} from "./board.entitiy"
import { CreateBoardDto } from "./dto/create-board.dto";


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

    async createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
        const { title, description } = createBoardDto;

        const board = this.create({
            title,
            description,
            status: BoardStatus.PUBLIC,
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