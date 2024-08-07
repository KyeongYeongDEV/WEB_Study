export declare class GetChatRoomRequestDTO {
    cr_id: number;
    title: string;
    participants: string[];
}
export declare class CreateChatRoomRequestDTO {
    u_id: number;
    title: string;
}
export declare class DeleteChatRoomDTO {
    cr_id: number;
    u_id: number;
}
