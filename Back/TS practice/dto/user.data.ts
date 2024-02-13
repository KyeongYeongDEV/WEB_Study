import { UserRequestDto } from "./request/user-dto.request";

export class UserDto{
    private userId : String;
    private userPw : String;
    private userName : String;

    constructor(user : UserRequestDto){
        this.userId = user.userId;
        this.userPw = user.userPw;
        this.userName = user.userName;
    }

    public getUserId(): String{
        return this.userId;
    }

    public getUserPw():String{
        return this.userPw;
    }

    public getUserName():String{
        return this.userName;
    }

    public isEqual(userDto : UserDto) : boolean{
        if(userDto.getUserId() !== this.getUserId()) return false;
        return true;
    }
}