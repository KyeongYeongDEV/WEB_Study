"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const video_service_1 = require("./video.service");
const swagger_decorator_1 = require("../common/decorator/swagger.decorator");
const req_dto_1 = require("./dto/req.dto");
const res_dto_1 = require("./dto/res.dto");
const user_dto_1 = require("../common/dto/user.dto");
const user_decorator_1 = require("../common/decorator/user.decorator");
const req_dto_2 = require("../common/dto/req.dto");
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    async create(file, { title }, { id }) {
        const { mimetype, originalname, buffer } = file;
        const extension = originalname.split('.')[1];
        const video = await this.videoService.create(id, title, mimetype, extension, buffer);
        return res_dto_1.CreateVideoResDto.toDto(video);
    }
    async findAll({ page, size }) {
        const videos = await this.videoService.findAll(page, size);
        return { items: videos.map((video) => res_dto_1.FindVideoResDto.toDto(video)) };
    }
    async findOne({ id }) {
        const video = await this.videoService.findOne(id);
        return res_dto_1.FindVideoResDto.toDto(video);
    }
    async play({ id }, res) {
        const { stream, mimetype, size } = await this.videoService.download(id);
        res.set({
            'Content-Length': size,
            'Content-Type': mimetype,
            'Content-Disposition': 'attachment;',
        });
        return new common_1.StreamableFile(stream);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_1.CreateVideoResDto),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('video')),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: 'mp4',
    })
        .addMaxSizeValidator({
        maxSize: 5 * 1024 * 1024,
    })
        .build({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }))),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, req_dto_1.CreateVideoReqDto,
        user_dto_1.UserAfterAuth]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_decorator_1.ApiGetItemsResponse)(res_dto_1.FindVideoResDto),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_2.PageReqDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_decorator_1.ApiGetResponse)(res_dto_1.FindVideoResDto),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.FindVideoReqDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.FindVideoReqDto, Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "play", null);
VideoController = __decorate([
    (0, swagger_1.ApiTags)('Video'),
    (0, swagger_1.ApiExtraModels)(res_dto_1.CreateVideoResDto, res_dto_1.FindVideoResDto, req_dto_1.FindVideoReqDto),
    (0, common_1.Controller)('videos'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map