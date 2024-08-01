import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('My Chat API')
    .setDescription('My Chat Description')
    .setVersion("1.0")
    .addServer('http://localhost:3000/', 'Local environment')
    .addTag('my api tag')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document); //route 설정

  await app.listen(3000);
}
bootstrap();
