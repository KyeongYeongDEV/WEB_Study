import { studentRequestDto } from "../Dto/requeat/student-Dto.request";


export class StudentInfo{
    private students : studentRequestDto[];

    constructor(){
        this.students =[];
    }

    public getStudents() : studentRequestDto[]{
        return this.students;
    }

    public setStudents(students : studentRequestDto[]){
        this.students = students;
    }
}