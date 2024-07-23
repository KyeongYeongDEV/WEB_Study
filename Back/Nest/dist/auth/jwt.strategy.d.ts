import { Strategy } from "passport-jwt";
import { UserRepository } from "src/domain/user/user.repositoty";
import { UserEntity } from "src/domain/user/user.entity";
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: any): Promise<UserEntity>;
}
export {};
