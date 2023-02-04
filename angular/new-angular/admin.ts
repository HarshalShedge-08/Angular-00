import { Student } from "./student";
import { Teacher } from "./teacher";

class Admin{
    t=new Teacher('milind','sir',2);
    s=new Student('mohan','patil',101);

    constructor(){
        this.t.teachName();
        let tdata=this.t.teachData('angular',20000);
        console.log(tdata);

        this.s.showData();
        this.s.assignment('angular',35)
        
    }
}

let b=new Admin();