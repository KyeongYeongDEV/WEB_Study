import { studentRequestDto } from "./requeat/student-Dto.request"

export class StudentDto{
    private id : number
    private name : string
    private age : number
    private score : number

    constructor(student : studentRequestDto){
        this.id = student.id;
        this.name = student.name;
        this.age = student.age;
        this.score = student.score;
    }

    public getId() : number{
        return this.id;
    }
    public getName():string{
        return this.name;
    }
    public getAge():number{
        return this.age;
    }
    public getScore():number{
        return this.score;
    }

    public setId(id : number){
        this.id = id;
    }
    public setName(name : string){
        this.name = name;
    }
    public setAge(age : number){
        this.age = age;
    }
    public setScore(score : number){
        this.score = score;
    }
}
