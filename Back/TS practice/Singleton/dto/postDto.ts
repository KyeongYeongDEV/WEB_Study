import postRequestDto from "./request/post-dto.request";

export class postDto{
    private  title: String;
    private  content: String;
    private  author: String;

    constructor(post : postRequestDto){
        this.title = post.title;
        this.content = post.content;
        this.author = post.author;
    }

    public getTitle():String{
        return this.title;
    }

    public getContent():String{
        return this.content;
    }
    public getAuthor():String{
        return this.author;
    }

}