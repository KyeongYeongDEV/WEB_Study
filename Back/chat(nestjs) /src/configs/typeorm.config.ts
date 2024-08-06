import { UserEntity } from "../user/user.entity";
import { DataSource } from "typeorm"
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type : "postgres",
    host : "localhost",
    port : 8000,
    username : "postgres",
    password : "postgres",
    database : "chat",
    entities : [UserEntity],
    synchronize : true //개발 환경에서만 true 배포시 false
};