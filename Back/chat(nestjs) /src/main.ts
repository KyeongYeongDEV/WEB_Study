import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("NestJS Project")
    .setDescription("NestJS project API description")
    .setVersion('0.1')
    .addBasicAuth()
    .build();

    const customOptions : SwaggerCustomOptions = {
      swaggerOptions : {
        persisAuthorization : true,
      },
    }
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(3000);
}
bootstrap();
