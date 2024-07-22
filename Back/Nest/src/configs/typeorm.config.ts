import { BoardEntity } from "src/boards/board.entitiy";
import { DataSource } from "typeorm"

export const typeORMConfig  = new DataSource({
    type : "mysql",
    host : "localhost",
    port : 3306,
    username : "root",
    password : "Dkdldnjs7098!",
    database : "asdf",
    entities : [BoardEntity],
    synchronize : true //개발 환경에서만 true 배포시 false
});