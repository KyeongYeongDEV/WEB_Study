import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { BoardsController } from "./board.controller";
import { BoardEntity } from "./board.entitiy";
import { BoardsRepository } from "./board.repository";
import { BoardsService } from "./board.service";


@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity])],
  controllers: [BoardsController],
  providers: [
      BoardsService,
      {
          provide: 'BoardsRepository',
          useFactory: (dataSource: DataSource) => {
              return new BoardsRepository(dataSource);
          },
          inject: [DataSource],
      },
  ],
})
export class BoardsModule {}