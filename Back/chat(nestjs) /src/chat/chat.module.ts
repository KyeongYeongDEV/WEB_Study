import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { MessageEntity } from 'src/domain/entity/message.entity';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([ChatRoomEntity, MessageEntity]),
  ],
  controllers : [ChatController],
  providers: [ChatService]
})
export class ChatModule {}
