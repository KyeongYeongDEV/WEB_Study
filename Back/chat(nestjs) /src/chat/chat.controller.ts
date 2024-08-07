import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiDeleteResponse, ApiGetResponse, ApiPatchResponse, ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { ChatService } from './chat.service';
import { CreateChatRoomRequestDTO, GetChatRoomRequestDTO } from './dto/req.dto';
import { ChatRoomResponseDTO } from './dto/res.dto';

@ApiTags('chat')
@ApiExtraModels(GetChatRoomRequestDTO, ChatRoomResponseDTO)
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
            return await this.chatService.createChatRoom(u_id, createChatRoomRequestDTO,);
    }

    @Patch(':u_id/rooms/:cr_id')
    @ApiPatchResponse(ChatRoomResponseDTO)
    async joinChatRoom(
        @Param('u_id') u_id : number,
        @Param('cr_id') cr_id : number
    ) : Promise<void>{
        return await this.chatService.joinChatRoom(u_id,cr_id);
    }

    @Get(':u_id/rooms')
    @ApiGetResponse(ChatRoomResponseDTO)
    async getChatRoom(@Param('u_id') u_id : number) : Promise<ChatRoomEntity[]> {
        return await this.chatService.findAllChatRoomByUid(u_id)
    }

    @Get('rooms/:cr_id')
    @ApiGetResponse(ChatRoomResponseDTO)
    async getOneChatRoom(@Param('cr_id') cr_id : number) : Promise<ChatRoomEntity> {
        return await this.chatService.findOneChatRoomByChatRoomId(cr_id);
    }
    

    @Delete(':u_id/rooms/:cr_id')
    @ApiDeleteResponse(ChatRoomEntity)
    async deleteChatRoom(@Param() u_id : number, cr_id : number) :Promise<void> {
        return await this.chatService.deleteChatRoom(u_id, cr_id);
    }
}
