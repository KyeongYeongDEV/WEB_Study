"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const board_status_enum_1 = require("../../boards/board-status.enum");
const board_entitiy_1 = require("./board.entitiy");
class BoardsRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(board_entitiy_1.BoardEntity, dataSource.createEntityManager());
    }
    async getBoardById(id) {
        const found = await this.findOne({ where: { id } });
        if (!found) {
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        }
        return found;
    }
    async getAllBoards() {
        return this.find();
    }
    async createBoard(createBoardDto, user) {
        const { title, description } = createBoardDto;
        const board = this.create({
            title,
            description,
            status: board_status_enum_1.BoardStatus.PUBLIC,
            user
        });
        await this.save(board);
        return board;
    }
    async deleteBoard(id) {
        const result = await this.delete(id);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Can't find Board with id ${id}`);
        return;
    }
    async updateBoardStatus(id, status) {
        const board = await this.getBoardById(id);
        board.status = status;
        await this.save(board);
        return board;
    }
}
exports.BoardsRepository = BoardsRepository;
//# sourceMappingURL=board.repository.js.map