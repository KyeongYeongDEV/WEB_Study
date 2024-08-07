import { Injectable, NotFoundException } from '@nestjs/common';
import { ChatRoomEntity } from 'src/domain/entity/chat.entity';
import { UserEntity } from 'src/domain/entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateUserRequestDTO } from './dto/req.dto';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    async createUser({ name, email, password }: CreateUserRequestDTO): Promise<any> {
        try {
            const user = this.create({ email, name, password });
            await this.save(user);

            return user.email;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        try {
            const foundUser: UserEntity = await this.findOne({ where: { email } });

            return foundUser;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findUserByUserId(u_id : number) : Promise <UserEntity>{
        try{
            const foundUser: UserEntity = await this.findOne({ where: { u_id : u_id }, relations: ['chatRooms']});

            if (!foundUser) throw new NotFoundException("존재하지 않는 회원입니다");

            return foundUser;
        }catch(error){
            throw new Error(error);
        }
    }

    async findAllChatRoomsByUserId(u_id: number): Promise<ChatRoomEntity[]> {
        try {
            const foundUser: UserEntity = await this.findOne({ where: { u_id }, relations: ['chatRooms'] });

            if (!foundUser) throw new NotFoundException('사용자의 채팅방을 찾을 수가 없습니다');

            return foundUser.chatRooms;
        } catch (error) {
            throw new Error(error);
        }
    }

}
