import { Body, Controller, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, ParseUUIDPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod';
import { ParseIdPipe } from './pips/parseId.pipe';
import { ZodValidationPipe } from './pips/zodValidationPipe';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "All properties";
    }
    @Get(":id/:slug")
    findOne(@Param("id") id : string, @Param("slug") slug : string){
        return `id = ${id}\nslug = ${slug}`;

        /**
         * http://localhost:3000/property/1/99
         * 출력 :
         *  id = 1
            slug = 99
         */
    }

    @Get("/object/:id")
    findOneObject(@Param('id', ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort ){ //     {"id": "1"} 이런 형태의 객체로 반환된다.
        console.log(typeof id)
        console.log(typeof sort)
        return id;
    }

    @Post()
    //@UsePipes(new ValidationPipe({whitelist : true, forbidNonWhitelisted : true}))
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    @HttpCode(202) //status 코드 전송
    create(@Body()
        body : CreatePropertyZodDto
    ){
        return body;

        /**
         * @Body("name") name
         * req로 들어온 것 중에 name이라는 친구를 name이라는 지역변수에 담는다
         * 
         *   @UsePipes Pipe()에 {whitelist : ture} 를 해주면
         *  dto에 있는 것 외에 것이 들어오면 그것들은 걸러서 body로 넘겨준다
         * 
         * 
         * @UsePipes(new ValidationPipe({whitelist : true, forbidNonWhitelisted : true}))
         * {forbidNonWhitelisted : true}까지 추가해주면 
         * Dto 외에 것이 들어오면 오류가 난다
         * 
         * create(@Body(new ValidationPipe({whitelist : true, forbidNonWhitelisted : true})) body : CreatePropertyDto )
         * 이렇게 해줘도 같은 역할을 한다
         */
        
    } 

    @Patch(":id")
    update(
        @Param("id", ParseIdPipe) id,
        @Body() 
        body : CreatePropertyDto,
        @Headers("host") header
    ){
        return header;
    }
}
