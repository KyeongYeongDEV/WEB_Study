import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    id: number;
    email: string;
    name: string;
    password: string;
}
