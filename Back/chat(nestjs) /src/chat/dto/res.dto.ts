export class ChatRoomResponseDTO {
    r_id : string;
    roomName : string;
    participants : string[];
    createdAt : Date;
}

export class GetChatRoomListDTO {
    r_id : number;
    roomName : string[]
}
