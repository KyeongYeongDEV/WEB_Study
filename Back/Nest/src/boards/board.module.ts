import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { BoardsController } from "./board.controller";
import { BoardEntity } from "../domain/board/board.entitiy";
import { BoardsRepository } from "../domain/board/board.repository";
import { BoardsService } from "./board.service";
import { AuthModule } from "src/auth/auth.module";


@Module({
  imports: [
    TypeOrmModule.forFeature([BoardEntity]),
    AuthModule
],
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