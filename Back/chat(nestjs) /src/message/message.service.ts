import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatRepository } from 'src/chat/chat.repository';
import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { MessageEntity } from 'src/domain/entity/message.entity';
import { SendMessageRequestDTO, getMessageRequestDTO } from './dto/req.dto';
import { MessageRepository } from './message.reposity';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(MessageRepository)
        private readonly messageRepository : MessageRepository,
        @InjectRepository(ChatRepository)
        private readonly chatRepository : ChatRepository
    ){}
    
    async sendMessage(cr_id : number, sendMessageRequestDTO : SendMessageRequestDTO){
        const foundChatRoom : ChatRoomEntity = await this.chatRepository.findChatRoomByChatRoomId(cr_id);

        const newMessage : MessageEntity = await this.messageRepository.createMessage(cr_id,sendMessageRequestDTO);
        foundChatRoom.messages.push(newMessage);
        

        await this.chatRepository.save(foundChatRoom);

        return {
            message : "성공적으로 메세지를 생성했습니다"
        }
    }

    async getMessage({cr_id} : getMessageRequestDTO) : Promise<MessageEntity[]> {
        try{
            const messages = await this.messageRepository.getMessagesByChatRoomId(cr_id);

            return messages;
        }catch(error){
            throw new BadRequestException(error);
        }
    }

}
