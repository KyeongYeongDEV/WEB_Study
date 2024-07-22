"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class ZodValidationPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        const parsedValue = this.schema.safeParse(value);
        if (parsedValue.success)
            return parsedValue;
        throw new common_1.BadRequestException(parsedValue.error.format());
    }
}
exports.ZodValidationPipe = ZodValidationPipe;
//# sourceMappingURL=zodValidationPipe.js.map