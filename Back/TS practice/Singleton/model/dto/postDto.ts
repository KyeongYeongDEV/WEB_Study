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
    public setTitle(title : String){
        this.title = title;
    }

    public setContent(content:String){
        this.content = content;
    }

    public setAuthor(author : String){
        this.author = author;
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