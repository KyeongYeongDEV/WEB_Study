import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { UserEntity } from 'src/domain/entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateUserRequestDTO } from './dto/req.dto';
export declare class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource);
    createUser({ name, email, password }: CreateUserRequestDTO): Promise<any>;
    findUserByEmail(email: string): Promise<UserEntity>;
    findUserByUserId(u_id: number): Promise<UserEntity>;
    findAllChatRoomsByUserId(u_id: number): Promise<ChatRoomEntity[]>;
}
