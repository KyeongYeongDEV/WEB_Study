import { applyDecorators, Type } from "@nestjs/common";
import { ApiNoContentResponse, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";

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

export const ApiDeleteResponse = <TModel extends Type<any>>(model : TModel) =>{
    return applyDecorators(
        ApiNoContentResponse({
            description : `${model.name} deleted successfully`,
        })
    )
}