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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_repository_1 = require("../domain/board/board.repository");
let BoardsService = class BoardsService {
    constructor(boardsRepository) {
        this.boardsRepository = boardsRepository;
    }
    async getBoardById(id) {
        return this.boardsRepository.getBoardById(id);
    }
    async getAllBoards() {
        return this.boardsRepository.getAllBoards();
    }
    async createBoard(createBoardDto, user) {
        return this.boardsRepository.createBoard(createBoardDto, user);
    }
    async deletetBoard(id) {
        this.boardsRepository.delete(id);
        return;
    }
    async updateBoardStatus(id, status) {
        return this.boardsRepository.updateBoardStatus(id, status);
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BoardsRepository')),
    __metadata("design:paramtypes", [board_repository_1.BoardsRepository])
], BoardsService);
//# sourceMappingURL=board.service.js.map