import { Module } from "@nestjs/common";
import { BoardsController } from "./board.controller";
import { BoardsRepository } from "./board.repository";
import { BoardService } from "./board.service";

@Module({
  controllers : [BoardsController],
  providers : [BoardService, BoardsRepository],
})
export class BoardsModule{}
