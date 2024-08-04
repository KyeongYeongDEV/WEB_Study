import { applyDecorators, Type } from "@nestjs/common";
import { ApiOkResponse, getSchemaPath } from "@nestjs/swagger";

export const ApiGetResponse = <TModel extends Type<any>>(model : TModel) => {
    return applyDecorators(
        ApiOkResponse({
            schema : {
                allOf : [{$ref : getSchemaPath(model)}],
            }
        })
    )
};
export const ApiPostResponse = <TModel extends Type<any>>(model : TModel) => {
    return applyDecorators(
        ApiOkResponse({
            schema : {
                allOf : [{$ref : getSchemaPath(model)}],
            }
        })
    )
};