import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { CreateChatRoomRequestDTO, SendMessageRequestDto } from './dto/req.dto';

@ApiTags('chat')
@ApiExtraModels(CreateChatRoomRequestDTO, SendMessageRequestDto)
@Controller('chat')
export class ChatController {
    @Post("rooms")
    @ApiPostResponse(CreateChatRoomRequestDTO)
    async createChatroom(@Body() createChatRoomRequestDTO : CreateChatRoomRequestDTO) {}
    
    @Post('rooms/:r_id/messages')
    @ApiPostResponse(SendMessageRequestDto)
    async sendMessage(
        @Param('r_id') roomId : number,
        @Body() sendMessageRequestDto : SendMessageRequestDto
    ){ }

    @Post('rooms/:r_id/messages')
    //@ApiPostResponse({ status: 200, type: [MessageResDto], description: 'Get messages' })
    async getMessages(@Param('r_id') roomId : number) {}
}
