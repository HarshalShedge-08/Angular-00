//class-object

export class Student{
    id:number=1001;
    firstName:string='sai';
    lastName:string='patil';

    userName(id:number,firstName:string,lastName:string){

        this.id=id,
        this.firstName=firstName,
        this.lastName=lastName,

        console.log(id,firstName,lastName);
    }
}

// let user=new Student()
// user.userName(1001,'sai','patil')





 

