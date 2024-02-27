import commentRequestDto from "./request/comment-dto.request";

export class commentDto{
    private author : string;
    private postId : number;
    private comment : string;

    constructor(comment : commentRequestDto){
        this.author = comment.author;
        this.postId = comment.postId;
        this.comment  =comment.comment;
    }

    public getAuthor() : string{
        return this.author;
    }
    public getPostId() : number{
        return this.postId;
    }
    public getComment(): string{
        return  this.comment
    }

    public setAuthor(author : string){
        this.author = author;
    }
    public setPostId(postId : number){
        this.postId = postId;
    }
    public setComment(comment : string){
        this.comment = comment;
    }
}