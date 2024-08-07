import { BadRequestException, NotFoundException, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { ChatRoomEntity } from "src/domain/entity/chat.entity"
import { UserEntity } from "src/domain/entity/user.entity"
import { DataSource, Repository } from "typeorm"
import { CreateChatRoomRequestDTO,  } from "./dto/req.dto"

@Injectable()
export class ChatRepository extends Repository<ChatRoomEntity> {
    constructor(
        @InjectRepository(ChatRoomEntity)
        private readonly chatRoomRepository: Repository<ChatRoomEntity>,
    ) {
        super(ChatRoomEntity, chatRoomRepository.manager);
    }

 
    async createChatRoom({ u_id, title} : CreateChatRoomRequestDTO, user : UserEntity) : Promise<ChatRoomEntity>{
        try {
            const newChatRoom = new ChatRoomEntity();
            newChatRoom.title = title;
            newChatRoom.createdAt = new Date();
            newChatRoom.participants = [user];

            await this.save(newChatRoom);

            return newChatRoom;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async findChatRoom(cr_id : number): Promise<ChatRoomEntity>{
        try{
            const foundChatRoom : ChatRoomEntity= await this.findOne({where : {
                cr_id : cr_id
            }});

            if (!foundChatRoom) throw new NotFoundException('채팅방을 찾지 못 했습니다');

            return foundChatRoom;
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    async deleteChatRoom(cr_id :number) : Promise<void> {
        try{
            const foundChatRoom : ChatRoomEntity= await this.findChatRoom(cr_id);
            this.remove(foundChatRoom);

            return;
        }catch(error){
            throw new BadRequestException(error);
        }
    }
}  