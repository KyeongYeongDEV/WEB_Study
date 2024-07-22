"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropertySchema = void 0;
const zod_1 = require("zod");
exports.createPropertySchema = zod_1.default.object({
    name: zod_1.default.string(),
    description: zod_1.default.string().min(5),
    area: zod_1.default.number().positive(),
}).required();
//# sourceMappingURL=createPropertyZod.js.map