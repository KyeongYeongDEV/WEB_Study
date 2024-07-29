import { applyDecorators } from "@nestjs/common"
import { Type } from "@nestjs/common"
import { ApiCreatedResponse, ApiOkResponse, getSchemaPath } from "@nestjs/swagger"
import { PageResDto } from "../dto/res.dto";

export const ApiGetResponse = <TModel extends Type<any>>(model : TModel) =>{
    return applyDecorators(
        ApiOkResponse({ //state가 200를 받을 때 사용 -> Get은 성공시 200을 넘겨줌 
            schema : {
                allOf : [{$ref : getSchemaPath(model)}],
            },
        }),
    );
};

export const ApiPostResponse = <TModel extends Type<any>>(model : TModel) =>{
    return applyDecorators(
        ApiCreatedResponse({ // state가 201일 때 사용 -> Post의 경우 state 201을 넘겨줌 
            schema : {
                allOf : [{$ref : getSchemaPath(model)}],
            },
        }),
    );
};

export const ApiGetItensResponse = <TModel extends Type<any>>(model : TModel) => {
    return applyDecorators(
        ApiOkResponse({
            schema :{
                allOf : [
                    {$ref : getSchemaPath(PageResDto)},
                    {
                        properties : {
                            items : {
                                type : 'array',
                                items : {$ref : getSchemaPath(model)}
                            },
                        },
                        required : ['items']
                    }
                ]
            }
        })
    )
};