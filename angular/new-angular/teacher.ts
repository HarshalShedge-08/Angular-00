import { Student } from "./student";

export class Teacher {

    private stud = new Student('mohan', 'patil', 101);
    teachFName: string;
    teachLName: string;
    teachId: number;

    constructor(tfn:string,tln:string,tid:number) {

        this.teachFName=tfn;
        this.teachLName=tln;
        this.teachId=tid;

        this.stud.showData();
        this.stud.assignment('angular',30)
    }

    teachName(){
        console.log(this.teachFName);
        console.log(this.teachLName);
        console.log(this.teachId);
    }

    teachData(subject:string,salary:number){

        return subject+" "+salary
    }
}

// let a=new Teacher('milind','sir',2)