import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { NotFoundError } from "rxjs"
import { ChatRoomEntity } from "src/domain/entity/chat.entity"
import { UserEntity } from "src/domain/entity/user.entity"
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

    async findChatRoom(cr_id : number): Promise<ChatRoomEntity>{
        try{
            const foundChatRoom = await this.findOne({where : {cr_id : cr_id}});

            return foundChatRoom;
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    async deleteChatRoom(cr_id :number) : Promise<void> {
        try{
            const foundChatRoom = await this.findOne({where : {cr_id : cr_id}});
            this.remove(foundChatRoom);

            return;
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    //async findAllChatroomByUserId(u_id : number) : Promise<ChatRoomEntity[]> {
        // try{    
        //     const foundChatRooms : UserEntity = await this.findOne({
        //         where : {u_id : u_id},
        //         relations : ['chatRooms'],
        //     });

        //     if(!foundChatRooms) throw new NotFoundException("해당 사용자의 채팅방을 찾지 못했습니다")

        //     return foundChatRooms.chatRooms;
        // }catch(error){
        //     throw new Error(error)
        // }
   // }
}  