import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BoardEntity } from "../boards/board.entitiy";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Dkdldnjs7098!',
    database: 'asdf',
    entities: [BoardEntity],
    synchronize: true, // 개발 환경에서만 true로 설정. 배포 시 false로 설정.
};
