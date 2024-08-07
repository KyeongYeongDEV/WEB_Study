import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRepository } from 'src/chat/chat.repository';
import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { MessageEntity } from 'src/domain/entity/message.entity';
import { UserEntity } from 'src/domain/entity/user.entity';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.reposity';
import { MessageService } from './message.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([MessageEntity, ChatRoomEntity, UserEntity])
    ],
    controllers: [MessageController],
    providers: [
        MessageService,
        MessageRepository,
        ChatRepository,
    ]
})
export class MessageModule {}
