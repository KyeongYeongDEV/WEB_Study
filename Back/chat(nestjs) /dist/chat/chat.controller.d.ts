import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { ChatService } from './chat.service';
import { GetChatRoomRequestDTO } from './dto/req.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createChatroom(getChatRoomRequestDTO: GetChatRoomRequestDTO, u_id: number): Promise<void>;
    getChatRoom(u_id: number): Promise<ChatRoomEntity[]>;
    deleteChatRoom(u_id: number, r_id: number): Promise<void>;
}
