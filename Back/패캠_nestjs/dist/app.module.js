"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const analytics_module_1 = require("./analytics/analytics.module");
const user_module_1 = require("./user/user.module");
const video_module_1 = require("./video/video.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const postgres_config_1 = require("./config/postgres.config");
const jwt_config_1 = require("./config/jwt.config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [postgres_config_1.default, jwt_config_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    let obj = {
                        type: 'postgres',
                        host: configService.get('postgres.host'),
                        port: configService.get('postgres.port'),
                        database: configService.get('postgres.database'),
                        username: configService.get('postgres.username'),
                        password: configService.get('postgres.password'),
                        autoLoadEntities: true,
                    };
                    if (configService.get('NODE_ENV') === 'development') {
                        console.info('Sync TypeORM');
                        obj = Object.assign(obj, {
                            synchronize: true,
                            logging: true,
                        });
                    }
                    return obj;
                },
            }),
            video_module_1.VideoModule,
            analytics_module_1.AnalyticsModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map