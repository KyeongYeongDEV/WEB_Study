import { CreatePropertyDto } from './dto/createProperty.dto';
import { CreatePropertyZodDto } from './dto/createPropertyZod';
export declare class PropertyController {
    findAll(): string;
    findOne(id: string, slug: string): string;
    findOneObject(id: any, sort: any): any;
    create(body: CreatePropertyZodDto): {
        name?: string;
        description?: string;
        area?: number;
    };
    update(id: any, body: CreatePropertyDto): CreatePropertyDto;
}
