import { SendMessageRequestDto } from './dto/req.dto';
import { MessageService } from './message.service';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    sendMessage(cr_id: number, sendMessageRequestDto: SendMessageRequestDto): Promise<void>;
    getMessages(cr_id: number): Promise<void>;
}
