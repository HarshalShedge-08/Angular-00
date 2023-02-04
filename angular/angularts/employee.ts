
export class Employee{
    id: number;
    firstName: string;
    lastName: string;

    constructor(id:number,firstName:string,lastName:string){
        this.id=1001
        this.firstName='rohan'
        this.lastName='patil'
    }

    showData(){
        console.log(this.id);
        console.log(this.firstName);
        console.log(this.lastName);    
    }
 
    user(){
        return (this.id+this.firstName+this.lastName);
         
    }
}





 

