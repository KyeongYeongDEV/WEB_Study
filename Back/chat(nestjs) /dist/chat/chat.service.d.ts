import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { UserRepository } from 'src/user/user.repository';
import { ChatRepository } from './chat.repository';
import { CreateChatRoomRequestDTO } from './dto/req.dto';
export declare class ChatService {
    private readonly chatRepository;
    private readonly userRepository;
    constructor(chatRepository: ChatRepository, userRepository: UserRepository);
    findAllChatRoomByUid(u_id: number): Promise<ChatRoomEntity[]>;
    findOneChatRoomByChatRoomId(cr_id: number): Promise<ChatRoomEntity>;
    joinChatRoom(cr_id: number, u_id: number): Promise<any>;
    createChatRoom(u_id: number, createChatRoomRequestDTO: CreateChatRoomRequestDTO): Promise<any>;
    deleteChatRoom(u_id: number, cr_id: number): Promise<any>;
}
