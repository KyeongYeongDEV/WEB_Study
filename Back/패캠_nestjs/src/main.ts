import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule,{
      logger : WinstonModule.createLogger({
        transports : [
          new winston.transports.Console({
            level : process.env.STAGE === 'prod' ? 'info' : 'debug',
            format : winston.format.combine(
              winston.format.timestamp(),
              utilities.format.nestLike('NestJS', {prettyPrint : true}),
            ),
        }),
      ],
    })
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('NestJS project')
    .setDescription('NestJS project API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const customOptions : SwaggerCustomOptions = {
    swaggerOptions : {
      persistAuthorization :true, // 새로고침을 하면 인증이 풀리는데 안 풀리게 해줌
    }
  }
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, customOptions);

  // ValidationPipe 전역 적용
  app.useGlobalPipes(
    new ValidationPipe({
      // class-transformer 적용
      transform: true,
    }),
  );

  await app.listen(port);
  Logger.log(`STAGE : ${process.env.STAGE}`);
  Logger.log(`listening on port ${port}`);
}
bootstrap();
