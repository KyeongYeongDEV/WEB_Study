import { postDto } from "./postDto";

export class UserDto{
    private id : string;
    private name : string;
    private Posts : postDto[];

    constructor(id : string, name : string){
        this.id = id;
        this.name = name;
        this.Posts = []
    }

    public setId(id : string){
        this.id = id
    }
    public setName(name: string){
        this.name = name;
    }
    public setPosts(Posts : postDto[]){
        this.Posts  = Posts;
    }

    public getId() : string {
        return  this.id;
    }
    public getName() : string{
        return  this.name;
    }
    public getPosts() : postDto[]{
        return this.Posts;
    }


}