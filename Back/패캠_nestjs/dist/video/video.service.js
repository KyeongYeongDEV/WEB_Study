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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const node_fs_1 = require("node:fs");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const typeorm_2 = require("typeorm");
const video_entity_1 = require("./entity/video.entity");
const user_entity_1 = require("../user/entity/user.entity");
let VideoService = class VideoService {
    constructor(dataSource, videoRepository, userRepository) {
        this.dataSource = dataSource;
        this.videoRepository = videoRepository;
        this.userRepository = userRepository;
    }
    async create(userId, title, mimetype, extension, buffer) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.startTransaction();
        try {
            const user = await this.userRepository.findOneBy({ id: userId });
            const video = await this.videoRepository.save(this.videoRepository.create({ title, mimetype, user }));
            await this.uploadVideo(video.id, extension, buffer);
            await queryRunner.commitTransaction();
            return video;
        }
        catch (err) {
            console.error(err);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll(page, size) {
        const videos = await this.videoRepository.find({ relations: ['user'], skip: (page - 1) * size, take: size });
        return videos;
    }
    async findOne(id) {
        const video = await this.videoRepository.findOne({ relations: ['user'], where: { id } });
        if (!video)
            throw new common_1.NotFoundException('No video');
        return video;
    }
    async download(id) {
        const video = await this.videoRepository.findOneBy({ id });
        if (!video)
            throw new common_1.NotFoundException('No video');
        await this.videoRepository.update({ id }, { downloadCnt: () => 'download_cnt + 1' });
        const { mimetype } = video;
        const extension = mimetype.split('/')[1];
        const videoPath = (0, node_path_1.join)(process.cwd(), 'video-storage', `${id}.${extension}`);
        const { size } = await (0, promises_1.stat)(videoPath);
        const stream = (0, node_fs_1.createReadStream)(videoPath);
        return { stream, mimetype, size };
    }
    async uploadVideo(id, extension, buffer) {
        const filePath = (0, node_path_1.join)(process.cwd(), 'video-storage', `${id}.${extension}`);
        await (0, promises_1.writeFile)(filePath, buffer);
    }
};
VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(video_entity_1.Video)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map