import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    id: number;
    username: string;
    password: string;
}
