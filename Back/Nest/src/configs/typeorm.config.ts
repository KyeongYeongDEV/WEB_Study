import { UserEntity } from "src/auth/user.entity";
import { BoardEntity } from "src/boards/board.entitiy";
import { DataSource } from "typeorm"

export const typeORMConfig  = new DataSource({
    type : "postgres",
    host : "localhost",
    port : 8000,
    username : "postgres",
    password : "postgres",
    database : "BoardProject",
    entities : [BoardEntity, UserEntity],
    synchronize : true //개발 환경에서만 true 배포시 false
});