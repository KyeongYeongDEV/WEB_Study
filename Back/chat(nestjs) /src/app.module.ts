import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ChatModule } from './chat/chat.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
    ChatModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
