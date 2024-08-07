import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

    async findOneChatRoomByChatRoomId (cr_id : number) : Promise<ChatRoomEntity>{
        return this.chatRepository.findChatRoomByChatRoomId(cr_id);
    }

    async joinChatRoom(cr_id : number, u_id : number) : Promise<any> {
        const foundUser : UserEntity = await this.userRepository.findUserByUserId(u_id);
        const foundChatRoom : ChatRoomEntity = await this.chatRepository.findChatRoomByChatRoomId(cr_id);

        if (foundChatRoom.participants.some(participant => participant.u_id === u_id)) {
            throw new BadRequestException('이미 채팅방에 참여중입니다.');
        }

        foundChatRoom.participants.push(foundUser);
        await this.chatRepository.save(foundChatRoom);

        return {
            message: "성공적으로 채팅방에 참여했습니다",
        }
    }
    async createChatRoom (u_id : number, createChatRoomRequestDTO : CreateChatRoomRequestDTO) : Promise <any> {
        const user : UserEntity = await this.userRepository.findOne({where : {u_id : u_id}});

        if(!user) throw new NotFoundException('사용자를 찾지 못했습니다.')

        const newChatRoom : ChatRoomEntity = await this.chatRepository.createChatRoom(createChatRoomRequestDTO, user);
        user.chatRooms.push(newChatRoom);

        await this.userRepository.save(user);

        return {
            message : "성공적으로 채팅방을 생성했습니다"
        }
    }

    async deleteChatRoom(u_id: number, cr_id: number): Promise<any> {
        const foundChatRoom: ChatRoomEntity = await this.chatRepository.findChatRoomByChatRoomId(cr_id);

        if (!foundChatRoom) throw new NotFoundException("일치하는 채팅방이 없습니다");
        const chatRoomUser = foundChatRoom.participants.find(user => user.u_id === u_id);
        if (!chatRoomUser) throw new NotFoundException("해당 채팅방에 접근 권한이 없습니다");

        await this.chatRepository.deleteChatRoom(cr_id);

        return {
            message: "성공적으로 채팅방을 삭제했습니다"
        };
    }
}
