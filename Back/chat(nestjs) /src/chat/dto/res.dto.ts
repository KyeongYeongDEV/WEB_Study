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

export class MessageResDTo {
    m_id : string;
    r_id : string;
    sender_id : string;
    content : string;
    create_At : Date;
}