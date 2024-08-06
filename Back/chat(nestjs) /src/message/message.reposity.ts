import { Injectable } from "@nestjs/common";
import { MessageEntity } from "src/domain/entity/message.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class MessageRepository extends Repository<MessageRepository> {
    constructor(dataSource : DataSource){
        super(MessageEntity, dataSource.createEntityManager());
    }

    
}