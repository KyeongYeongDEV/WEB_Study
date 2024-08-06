import { UserEntity } from "../domain/entity/user.entity";
import { DataSource } from "typeorm"
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ChatRoomEntity } from "src/domain/entity/chat.entity";
import { MessageEntity } from "src/domain/entity/message.entity";

export const typeORMConfig : TypeOrmModuleOptions = {
    type : "postgres",
    host : "localhost",
    port : 8000,
    username : "postgres",
    password : "postgres",
    database : "chat",
    entities : [UserEntity, ChatRoomEntity, MessageEntity],
    synchronize : true //개발 환경에서만 true 배포시 false
};