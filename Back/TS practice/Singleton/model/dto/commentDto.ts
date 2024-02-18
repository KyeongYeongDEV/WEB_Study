import commentRequestDto from "./request/comment-dto.request";

export class commentDto{
    private  post: String;
    private  comment: String;
    private author : String;

    constructor(comment : commentRequestDto){
        this.post = comment.post;
        this.comment = comment.comment;
        this.author = comment.author;
    }

    public setPost(post: String){
        this.post= post;
    }

    public setComment(comment : String){
        this.comment = comment;
    }

    public setAuthor(author :String){
        this.author = author;
    }

    public getPost():String{
        return this.post;
    }

    public getContent():String{
        return this.comment;
    }

    public getAuthor() :String{
        return this.post;
    }
}