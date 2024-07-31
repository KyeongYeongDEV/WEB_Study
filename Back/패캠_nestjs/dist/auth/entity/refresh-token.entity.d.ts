import { User } from "src/user/entity/user.entity";
export declare class RefreshToken {
    id: string;
    token: string;
    createAt: Date;
    updateAt: Date;
    user: User;
}
