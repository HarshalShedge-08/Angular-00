import { Student } from "./class";

class Teacher{

    stud=new Student()

    collstud(id:number,firstName:string,lastName:string){

    this.stud.userName(id,firstName,lastName)

    }
}

let name=new Teacher()
name.collstud(1001,'sai','patil')
name.collstud(1002,'rohan','patil')

 