import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiGetResponse, ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { getMessageRequestDTO, SendMessageRequestDTO } from './dto/req.dto';
import { MessageResDTo } from './dto/res.dto';
import { MessageService } from './message.service';

@ApiTags('message')
@ApiExtraModels(MessageResDTo)
@Controller('api/message')
export class MessageController {
    constructor(
        private readonly messageService : MessageService,
    ){}

    @Post(':cr_id')
    @ApiPostResponse(MessageResDTo)
    async sendMessage(
        @Param('cr_id') cr_id : number,
        @Body() sendMessageRequestDto : SendMessageRequestDTO
    ){ 
        return this.messageService.sendMessage(cr_id, sendMessageRequestDto);
    }

    @Get(':cr_id')
    @ApiGetResponse(MessageResDTo)
    async getMessages(@Param('cr_id') cr_id : getMessageRequestDTO) {
        return this.messageService.getMessage(cr_id );
    }
}
