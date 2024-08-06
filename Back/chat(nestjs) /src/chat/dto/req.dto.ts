export class CreateChatRoomRequestDTO {
    r_id : number;
    participants : string[] //사용자 ID 목록
}

export class SendMessageRequestDto {
    r_id : number;
    senderId : number;
    content : string;
}