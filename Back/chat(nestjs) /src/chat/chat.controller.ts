import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiDeleteResponse, ApiGetResponse, ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { ChatService } from './chat.service';
import { CreateChatRoomRequestDTO, GetChatRoomRequestDTO } from './dto/req.dto';
import { ChatRoomResponseDTO, GetChatRoomListDTO } from './dto/res.dto';

@ApiTags('chat')
@ApiExtraModels(GetChatRoomRequestDTO, ChatRoomResponseDTO, GetChatRoomListDTO)
@Controller('api/chat')
export class ChatController {
    constructor(
        private readonly chatService : ChatService
    ){}

    @Post(":u_id/rooms")
    @ApiPostResponse(ChatRoomResponseDTO)
    async createChatroom (
        @Body() createChatRoomRequestDTO : CreateChatRoomRequestDTO,
        @Param('u_id') u_id : number
        ) : Promise<void> {
            return this.chatService.createChatRoom(u_id, createChatRoomRequestDTO,);
    }

    @Post(':u_id/rooms/:cr_id')
    //@ApiPostResponse()
    async joinChatRoom(){

    }

    @Get(':u_id/rooms')
    @ApiGetResponse(GetChatRoomListDTO)
    async getChatRoom(@Param('u_id') u_id : number) : Promise<ChatRoomEntity[]> {
        return this.chatService.findAllChatRoomByUid(u_id)
    }

    @Delete(':u_id/rooms/:cr_id')
    @ApiDeleteResponse(ChatRoomEntity)
    async deleteChatRoom(@Param() u_id : number, cr_id : number) :Promise<void> {
        return this.chatService.deleteChatRoom(u_id, cr_id);
    }
}
