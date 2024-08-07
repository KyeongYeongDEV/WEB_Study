import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { UserEntity } from 'src/domain/entity/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { ChatRepository } from './chat.repository';
import { CreateChatRoomRequestDTO } from './dto/req.dto';

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(ChatRepository)
        private readonly chatRepository : ChatRepository,
        @InjectRepository(UserRepository)
        private readonly userRepository  : UserRepository
    ){}

    async findAllChatRoomByUid( u_id : number) : Promise<ChatRoomEntity[]> {
        const founUser : UserEntity = await this.userRepository.findOne({where : {u_id : u_id}})

        if(!founUser.chatRooms.length) throw new NotFoundException("사용자가 속한 채팅방이 없습니다");
        
        return founUser.chatRooms;
    }

    async findOneChatRoomByRoomId(cr_id : number) : Promise<void> {

    }

    async createChatRoom ({u_id, title} : CreateChatRoomRequestDTO) : Promise <void> {
        const user : UserEntity = await this.userRepository.findOne({where : {u_id : u_id}});

        if(!user) throw new NotFoundException('사용자를 찾지 못했습니다.')

        const newChatRoom : Promise<ChatRoomEntity> = this.chatRepository.createChatRoom({u_id, title});
        user.chatRooms.push(await newChatRoom);

        await this.userRepository.save(user);
    }

    async deleteChatRoom(u_id : number) : Promise<void> {
        // if(!foundChatRoom) throw new BadRequestException("잘못된 cr_id 거나 userId가 존재하지 않습니다"); 
        // if(foundChatRoom.u_id !== u_id) throw new BadRequestException("채팅방 생성자와 로그인 유저의 정보가 일치하지 않습니다."); 
    }
}
