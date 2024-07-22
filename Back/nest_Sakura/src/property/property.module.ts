import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { PropertyController } from './property.controller';

@Module({
  controllers: [PropertyController],
  // providers:[{ //Global Validation
  //   provide : APP_PIPE,
  //   useValue : new ValidationPipe({
  //     whitelist : true,
  //     forbidNonWhitelisted : true,
  //     transform : true,
  //     transformOptions : {
  //       enableImplicitConversion : true,
  //     },
  //   }) 
  // }]
})
export class PropertyModule {}
