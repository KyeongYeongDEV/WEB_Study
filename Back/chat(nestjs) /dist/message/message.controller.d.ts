import { getMessageRequestDTO, SendMessageRequestDTO } from './dto/req.dto';
import { MessageService } from './message.service';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    sendMessage(cr_id: number, sendMessageRequestDto: SendMessageRequestDTO): Promise<{
        message: string;
    }>;
    getMessages(cr_id: getMessageRequestDTO): Promise<import("../domain/entity/message.entity").MessageEntity[]>;
}
