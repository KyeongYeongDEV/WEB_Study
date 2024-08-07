import { BadRequestException, ConsoleLogger, Injectable } from "@nestjs/common";
import { MessageEntity } from "src/domain/entity/message.entity";
import { DataSource, Repository } from "typeorm";
import { SendMessageRequestDTO } from "./dto/req.dto";

@Injectable()
export class MessageRepository extends Repository<MessageEntity> {
    constructor(dataSource: DataSource) {
        super(MessageEntity, dataSource.createEntityManager());
    }

    async getMessagesByChatRoomId(cr_id: number): Promise<MessageEntity[]> {
        const messages : MessageEntity[] = await this.find({
            where: { chatRoom: { cr_id } },
            relations: ['chatRoom'],
        });

        return messages;
    }

    async createMessage(cr_id : number, {sender_id, content} : SendMessageRequestDTO) : Promise<MessageEntity>{
        try{
            const newMessage = new MessageEntity();
            newMessage.sender_id = sender_id;
            newMessage.content = content;

            await this.save(newMessage);

            return newMessage;

        }catch(error){
            throw new BadRequestException(error);
        }
    }
}
