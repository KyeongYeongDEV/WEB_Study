import { BadRequestException, Injectable } from "@nestjs/common"
import { ChatRoomEntity } from "src/domain/entity/chat.entity"
import { DataSource, Repository } from "typeorm"
import { CreateChatRoomRequestDTO, DeleteChatRoomDTO } from "./dto/req.dto"

@Injectable()
export class ChatRepository extends Repository<ChatRoomEntity> {
    constructor(dataSource : DataSource) {
        super(ChatRepository, dataSource.createEntityManager())
    }

    async createChatRoom({cr_id, u_id, title} : CreateChatRoomRequestDTO) : Promise <void>{
        try{
            const newChatRoom = this.create({cr_id, u_id, title});
            await this.save(newChatRoom);

            return ;
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    async deleteChatRoom({cr_id, u_id} : DeleteChatRoomDTO): Promise<void>{
        try{
            const foundChatRoom = await this.findOne({where : {cr_id : cr_id}});

            if(!foundChatRoom) throw new BadRequestException("잘못된 cr_id 거나 userId가 존재하지 않습니다"); 
            if(foundChatRoom.u_id !== u_id) throw new BadRequestException("채팅방 생성자와 로그인 유저의 정보가 일치하지 않습니다."); 

            this.remove(foundChatRoom);

            return;
        }catch(error){
            throw new Error(error);
        }
    }
}  