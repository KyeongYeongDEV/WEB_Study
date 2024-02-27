import { UserDto } from "./dto/userDto";

export class Database{
    private static instance : Database;
    users : UserDto[];

    private constructor(){
        this.users = []
    }

    static getInstance() : Database {
        if(!this.instance){
            this.instance  = new Database();
        }
        return this.instance;
    }   
}