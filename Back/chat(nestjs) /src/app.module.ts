import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { ChatController } from './chat/chat.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory : async () =>typeORMConfig
    }),
    AuthModule
  ],
  controllers: [AppController, AuthController, ChatController],
  providers: [AppService, AuthService],
})
export class AppModule {}
