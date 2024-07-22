import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private readonly  boardsService : BoardService){}

    @Post()
    create(@Body() createBoardDTO : CreateBoardDto){
        return this.boardsService.create(createBoardDTO);
    }
}
