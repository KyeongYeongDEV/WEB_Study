import { MessageEntity } from "src/domain/entity/message.entity";
import { DataSource, Repository } from "typeorm";
import { SendMessageRequestDTO } from "./dto/req.dto";
export declare class MessageRepository extends Repository<MessageEntity> {
    constructor(dataSource: DataSource);
    getMessagesByChatRoomId(cr_id: number): Promise<MessageEntity[]>;
    createMessage(cr_id: number, { sender_id, content }: SendMessageRequestDTO): Promise<MessageEntity>;
}
