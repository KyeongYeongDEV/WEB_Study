export class postDto{
    private id: string;
    private postId : number;
    private content : string;

    constructor(id : string, postId : number, content:string){
        this.id  = id;
        this.postId = postId;
        this.content  = content;
    }

    public getId() : string{
        return this.id;
    }
    public getPostId() : number{
        return this.postId;
    }
    public getContent():string {
        return this.content;
    }   

    public setId(id : string){
        this.id = id
    }
    public setPostId (postId : number){
        this.postId = postId;
    }
    public setContent(content : string){
        this.content = content;
    }
}