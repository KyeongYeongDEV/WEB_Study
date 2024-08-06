export class CreateChatRoomRequestDTO {
    r_id : number;
    title : string
    participants : string[] //사용자 ID 목록
}

export class SendMessageRequestDto {
    r_id : number;
    sender_id : number;
    content : string;
}