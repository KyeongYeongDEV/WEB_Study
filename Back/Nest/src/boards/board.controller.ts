import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch,  Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardEntity } from '../domain/board/board.entitiy';
import { BoardsService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { AuthGuard } from "@nestjs/passport";
import { UserEntity } from 'src/domain/user/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';


@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
    private logger = new Logger('BoardController');

    constructor(private readonly boardsService: BoardsService) {}

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<BoardEntity> {
        return this.boardsService.getBoardById(id);
    }

    @Get()
    getAllBoard(
        @GetUser() user : UserEntity
    ){
        this.logger.verbose(`user ${user.username} trying all boards`);
        return this.boardsService.getAllBoards(user);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto,
    @GetUser() user : UserEntity): Promise<BoardEntity> {
        this.logger.verbose(`User ${user.username} createing a new board.\nPayload : ${JSON.stringify(createBoardDto)}`)

        return this.boardsService.createBoard(createBoardDto, user);
    }

    @Delete()
    deleteBoard(@Param('id', ParseIntPipe) id,
        @GetUser() user : UserEntity
    ) : Promise<void>{
        return this.boardsService.deletetBoard(id, user);
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