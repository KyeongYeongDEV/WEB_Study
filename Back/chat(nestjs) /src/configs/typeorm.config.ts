import { UserEntity } from "../auth/user.entity";
import { DataSource } from "typeorm"

export const typeORMConfig  = new DataSource({
    type : "postgres",
    host : "localhost",
    port : 8000,
    username : "postgres",
    password : "postgres",
    database : "chat",
    entities : [UserEntity],
    synchronize : true //개발 환경에서만 true 배포시 false
});