import { User } from '../entity/user.entity';
export declare class FindUserResDto {
    id: string;
    email: string;
    role: string;
    createdAt: string;
    static toDto({ id, email, role, createdAt }: User): {
        id: string;
        email: string;
        role: string;
        createdAt: string;
    };
}
