import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { UserRepository } from 'src/user/user.repository';
import { ChatController } from './chat.controller';
import { ChatRepository } from './chat.repository';
import { ChatService } from './chat.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([ChatRoomEntity]),
  ],
  controllers : [ChatController],
  providers: [
    ChatService,
    ChatRepository,
    UserRepository
  ]
})
export class ChatModule {}
