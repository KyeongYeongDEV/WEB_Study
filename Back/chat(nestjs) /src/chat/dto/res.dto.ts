export class ChatRoomResponseDTO {
    r_id : string;
    roomName : string;
    participants : string[];
    createdAt : Date;
}

export class MessageResDTo {
    m_id : string;
    r_id : string;
    senderId : string;
    content : string;
    create_At : Date;
}