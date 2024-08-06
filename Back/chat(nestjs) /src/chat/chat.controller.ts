import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiGetResponse, ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { CreateChatRoomRequestDTO, SendMessageRequestDto } from './dto/req.dto';
import { ChatRoomResponseDTO, GetChatRoomListDTO, MessageResDTo } from './dto/res.dto';

@ApiTags('chat')
@ApiExtraModels(CreateChatRoomRequestDTO, SendMessageRequestDto, MessageResDTo, ChatRoomResponseDTO, GetChatRoomListDTO)
@Controller('chat')
export class ChatController {
    @Post(":u_id/rooms")
    @ApiPostResponse(ChatRoomResponseDTO)
    async createChatroom(@Body() createChatRoomRequestDTO : CreateChatRoomRequestDTO) {}
    
    @Post('rooms/:r_id/messages')
    @ApiPostResponse(MessageResDTo)
    async sendMessage(
        @Param('r_id') roomId : number,
        @Body() sendMessageRequestDto : SendMessageRequestDto
    ){ }

    @Get('rooms/:r_id/messages')
    @ApiGetResponse(MessageResDTo)
    async getMessages(@Param('r_id') roomId : number) {}

    @Get(':u_id/rooms')
    @ApiGetResponse(GetChatRoomListDTO)
    async getChatRoom(@Param('u_id') u_id : number) {}
}
