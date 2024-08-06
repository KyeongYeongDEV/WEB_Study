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
        // if(!foundChatRoom) throw new BadRequestException("잘못된 cr_id 거나 userId가 존재하지 않습니다"); 
        // if(foundChatRoom.u_id !== u_id) throw new BadRequestException("채팅방 생성자와 로그인 유저의 정보가 일치하지 않습니다."); 
    }
}
