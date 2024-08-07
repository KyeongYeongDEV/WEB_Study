import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { UserRepository } from 'src/user/user.repository';
import { ChatRepository } from './chat.repository';
import { CreateChatRoomRequestDTO } from './dto/req.dto';
export declare class ChatService {
    private readonly chatRepository;
    private readonly userRepository;
    constructor(chatRepository: ChatRepository, userRepository: UserRepository);
    findAllChatRoomByUid(u_id: number): Promise<ChatRoomEntity[]>;
    findOneChatRoomByRoomId(cr_id: number): Promise<void>;
    createChatRoom({ u_id, title }: CreateChatRoomRequestDTO): Promise<void>;
    deleteChatRoom(u_id: number): Promise<void>;
}
