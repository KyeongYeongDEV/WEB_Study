import { DataSource, Repository } from "typeorm";
export declare class MessageRepository extends Repository<MessageRepository> {
    constructor(dataSource: DataSource);
}
