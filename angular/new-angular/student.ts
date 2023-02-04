export class Student{
    firstName:string;
    lastName:string;
    id:number;

    constructor(firstName:string,lastName:string,id:number){
        this.firstName='mohan'
        this.lastName='patil'
        this.id=101
    }

    assignment(sub:any,marks:any){

        if(marks>=35 && marks>=45){
            console.log('just pass');
         }
        else if(marks<=35){
            console.log('you are fail');
         }
        else if(marks>=45 && marks<=55){
            console.log('grade D');
         }
        else if(marks>=55 && marks<=65){
            console.log('grade C');  
         }
        else if(marks>=65 && marks<=75){
            console.log('grade B');
         }
        else if(marks>=75 && marks<=85){
            console.log('grade A');
         }
        else{
            console.log('grade A+');
        }

        return sub+" "+marks
    }
    showData(){
        console.log(this.firstName);
        console.log(this.lastName);   
        console.log(this.id);
    }
}