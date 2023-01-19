//primitive data type

// let a='harshal'

// console.log(a)

// let h:string='harshal'
// console.log(h);

// let n:number=123
// console.log(n);

// let b:boolean=false
// console.log(b);

// let u:undefined
// console.log(u);

// let r:null=null
// console.log(r);

//=========================================================================================================

//non-primitive data type

// let fruit:any[]=["apple","banana","mango","orange","grapes",12345]
// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);


let student = {
    id: 1001,
    name: "sai",
    email: "saipatil@gmail.com"
}

student.id = 100;


student[Symbol('id')] ='#' ;

console.log(student);

