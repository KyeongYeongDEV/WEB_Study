"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPatchResponse = exports.ApiDeleteResponse = exports.ApiPostResponse = exports.ApiGetResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiGetResponse = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOkResponse)({
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(model) }],
        }
    }));
};
exports.ApiGetResponse = ApiGetResponse;
const ApiPostResponse = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOkResponse)({
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(model) }],
        }
    }));
};
exports.ApiPostResponse = ApiPostResponse;
const ApiDeleteResponse = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiNoContentResponse)({
        description: `${model.name} deleted successfully`,
    }));
};
exports.ApiDeleteResponse = ApiDeleteResponse;
const ApiPatchResponse = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiNoContentResponse)({
        description: `${model.name} deleted successfully`,
    }));
};
exports.ApiPatchResponse = ApiPatchResponse;
//# sourceMappingURL=swagger.decorator.js.map