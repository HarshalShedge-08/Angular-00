
import { Employee } from "./employee";

 class Admin{
    constructor(){}

    emp=new Employee(1001,'rohan','patil');
    getData(){
        this.emp.showData();
    }
 }
 let admin=new Admin();
 admin.getData();
 
 








