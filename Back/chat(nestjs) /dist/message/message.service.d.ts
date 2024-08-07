import { ChatRepository } from 'src/chat/chat.repository';
import { MessageEntity } from 'src/domain/entity/message.entity';
import { SendMessageRequestDTO, getMessageRequestDTO } from './dto/req.dto';
import { MessageRepository } from './message.reposity';
export declare class MessageService {
    private readonly messageRepository;
    private readonly chatRepository;
    constructor(messageRepository: MessageRepository, chatRepository: ChatRepository);
    sendMessage(cr_id: number, sendMessageRequestDTO: SendMessageRequestDTO): Promise<{
        message: string;
    }>;
    getMessage({ cr_id }: getMessageRequestDTO): Promise<MessageEntity[]>;
}
