import { BadRequestException, NotFoundException, Injectable } from "@nestjs/common"
import { ChatRoomEntity } from "src/domain/entity/chat.entity"
import { DataSource, Repository } from "typeorm"
import { CreateChatRoomRequestDTO,  } from "./dto/req.dto"

@Injectable()
export class ChatRepository extends Repository<ChatRoomEntity> {
    constructor(dataSource : DataSource) {
        super(ChatRepository, dataSource.createEntityManager())
    }

 
    async createChatRoom({ u_id, title} : CreateChatRoomRequestDTO) : Promise<ChatRoomEntity>{
        try{
            const newChatRoom =new ChatRoomEntity();
            newChatRoom.title = title;
            newChatRoom.createdAt = new Date();
            newChatRoom.user.push(u_id);

            await this.save(newChatRoom);

            return newChatRoom;
        }catch(error){
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