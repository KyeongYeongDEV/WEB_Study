export class GetChatRoomRequestDTO {
    u_id : number;
    title : string;
}

export class CreateChatRoomRequestDTO {
    u_id : number; //방장
    title : string;
}

export class DeleteChatRoomDTO {
    cr_id : number;
    u_id : number;
}
