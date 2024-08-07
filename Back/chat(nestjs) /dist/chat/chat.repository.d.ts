import { ChatRoomEntity } from "src/domain/entity/chat.entity";
import { DataSource, Repository } from "typeorm";
import { CreateChatRoomRequestDTO } from "./dto/req.dto";
export declare class ChatRepository extends Repository<ChatRoomEntity> {
    constructor(dataSource: DataSource);
    createChatRoom({ u_id, title }: CreateChatRoomRequestDTO): Promise<ChatRoomEntity>;
    findChatRoom(cr_id: number): Promise<ChatRoomEntity>;
    deleteChatRoom(cr_id: number): Promise<void>;
}
