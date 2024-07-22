// export interface Board{
//     id : string;
//     title : string;
//     description : string;
//     status : BoardStatus 
// };

export enum BoardStatus{ // 게시글이 공개인지 비공개인지를 위한 enum이다
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}

//board model 정의하기