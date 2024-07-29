export declare class CreateVideoResDto {
    id: string;
    title: string;
}
export declare class FindVideoUserResDto {
    id: string;
    email: string;
}
export declare class FindVideoResDto {
    id: string;
    title: string;
    user: FindVideoResDto;
}
