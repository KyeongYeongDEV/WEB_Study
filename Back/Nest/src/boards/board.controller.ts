import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch,  Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardEntity } from '../domain/board/board.entitiy';
import { BoardsService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { AuthGuard } from "@nestjs/passport";


@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {}

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<BoardEntity> {
        return this.boardsService.getBoardById(id);
    }

    @Get()
    getAllBoard(){
        return this.boardsService.getAllBoards();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto): Promise<BoardEntity> {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Delete()
    deleteBoard(@Param('id', ParseIntPipe) id) : Promise<void>{
        return this.boardsService.deletetBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id : number,
        @Body('status', BoardStatusValidationPipe) status : BoardStatus
    )
    {
        return this.boardsService.updateBoardStatus(id, status);
    }
}