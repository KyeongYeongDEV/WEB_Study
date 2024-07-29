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
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_decorator_1 = require("../common/decorator/swagger.decorator");
const req_dto_1 = require("../common/dto/req.dto");
const res_dto_1 = require("../common/dto/res.dto");
const req_dto_2 = require("./dto/req.dto");
const res_dto_2 = require("./dto/res.dto");
const video_service_1 = require("./video.service");
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    upload(createVideoReqDto) {
        return this.videoService.create();
    }
    findAll({ page, size }) {
        return this.videoService.findAll();
    }
    findOne({ id }) {
        return this.videoService.findOne(id);
    }
    async download({ id }) {
        return this.videoService.download(id);
    }
};
__decorate([
    (0, swagger_decorator_1.ApiPostResponse)(res_dto_2.CreateVideoResDto),
    (0, common_3.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_2.CreateVideoReqDto]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "upload", null);
__decorate([
    (0, swagger_decorator_1.ApiGetItensResponse)(req_dto_2.FindVideoReqDto),
    (0, common_3.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_1.PageReqDto]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "findAll", null);
__decorate([
    (0, swagger_decorator_1.ApiGetResponse)(res_dto_2.FindVideoResDto),
    (0, common_3.Get)(':id'),
    __param(0, (0, common_3.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_2.FindVideoReqDto]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "findOne", null);
__decorate([
    (0, common_3.Get)(':id/download'),
    __param(0, (0, common_3.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [req_dto_2.FindVideoReqDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "download", null);
VideoController = __decorate([
    (0, swagger_1.ApiTags)('Video'),
    (0, swagger_1.ApiExtraModels)(req_dto_2.FindVideoReqDto, req_dto_1.PageReqDto, res_dto_2.FindVideoResDto, res_dto_1.PageResDto),
    (0, common_3.Controller)('api/videos'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map