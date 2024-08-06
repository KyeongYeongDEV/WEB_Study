import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatRepository } from './chat.repository';

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(ChatRepository)
        private readonly chatRepository : ChatRepository
    ){}

    async findAllChatRoomByUid( u_id : number) : Promise<void> {
        
    }

    async findOneChatRoomByRoomId(r_id : number) : Promise<void> {

    }

    async createChatRoom (title : string) : Promise <void> {
        
    }

    async deleteChatRoom(u_id : number) : Promise<void> {

    }
}
