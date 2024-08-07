import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { ChatService } from './chat.service';
import { CreateChatRoomRequestDTO } from './dto/req.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createChatroom(createChatRoomRequestDTO: CreateChatRoomRequestDTO, u_id: number): Promise<void>;
    joinChatRoom(u_id: number, cr_id: number): Promise<void>;
    getChatRoom(u_id: number): Promise<ChatRoomEntity[]>;
    getOneChatRoom(cr_id: number): Promise<ChatRoomEntity>;
    deleteChatRoom(u_id: number, cr_id: number): Promise<void>;
}
