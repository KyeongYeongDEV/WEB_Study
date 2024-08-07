import { ChatRoomEntity } from "src/domain/entity/chat.entity";
import { UserEntity } from "src/domain/entity/user.entity";
import { Repository } from "typeorm";
import { CreateChatRoomRequestDTO } from "./dto/req.dto";
export declare class ChatRepository extends Repository<ChatRoomEntity> {
    private readonly chatRoomRepository;
    constructor(chatRoomRepository: Repository<ChatRoomEntity>);
    createChatRoom({ u_id, title }: CreateChatRoomRequestDTO, user: UserEntity): Promise<ChatRoomEntity>;
    findChatRoom(cr_id: number): Promise<ChatRoomEntity>;
    deleteChatRoom(cr_id: number): Promise<void>;
}
