"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const port = 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger({
            transports: [
                new winston.transports.Console({
                    level: process.env.STAGE === 'prod' ? 'info' : 'debug',
                    format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike('NestJS', { prettyPrint: true })),
                }),
            ],
        })
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NestJS project')
        .setDescription('NestJS project API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const customOptions = {
        swaggerOptions: {
            persistAuthorization: true,
        }
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document, customOptions);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    await app.listen(port);
    common_1.Logger.log(`STAGE : ${process.env.STAGE}`);
    common_1.Logger.log(`listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map