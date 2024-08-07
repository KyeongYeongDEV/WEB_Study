export class GetChatRoomRequestDTO {
    cr_id : number;
    title : string
    participants : string[] //사용자 ID 목록
}

export class CreateChatRoomRequestDTO {
    u_id : number; //방장
    title : string;
}

export class DeleteChatRoomDTO {
    cr_id : number;
    u_id : number;
}
