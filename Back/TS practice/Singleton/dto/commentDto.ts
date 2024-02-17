import commentRequestDto from "./request/comment-dto.request";

export class commentDto{
    private readonly comment: String;
    private readonly author: String;

    constructor(comment : commentRequestDto){
        this.comment = comment.comment;
        this.author = comment.author;
    }

    public getContent():String{
        return this.comment
    }

    public getAuthor() :String{
        return this.author;
    }
}