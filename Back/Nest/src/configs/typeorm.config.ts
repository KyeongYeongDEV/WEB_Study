import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type : "mysql",
    host : "localhost",
    port : 3306,
    username : "root",
    password : "Dkdldnjs7098!",
    database : "asdf",
    entities : [__dirname + '../**/*.entity.{js,ts}']
}