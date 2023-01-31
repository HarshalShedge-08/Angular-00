// statement 
// 1-for 
// (example of infinite number --use Ctrl + C to stop--)
// let index:number=1;
// for(let a=10; a>=index; a++){
//     console.log(a); 
// }
//==========================================================================
// let fruit:any[]=["apple","banana","mango","orange","grapes"]
// for(let i=0; i<=fruit.length; i++){
// console.log(fruit[i]);
// }
//=========================================================================
// --for--
// let stu=[
// {
//     id:1001,
//     name:'sai patil',
// },
// {
//     id:1002,
//     name:'rohan patil',
// },
// {
//     id:1003,
//     name:'nikhil patil',
// },
// {
//     id:1004,
//     name:'rohit patil',
// }]
// for(let i=0; i<=stu.length; i++){
//     console.log(stu[i]);
// }
//=================================================================
//--while--
var stu = [
    {
        id: 1001,
        name: 'sai patil'
    },
    {
        id: 1002,
        name: 'rohan patil'
    },
    {
        id: 1003,
        name: 'nikhil patil'
    },
    {
        id: 1004,
        name: 'rohit patil'
    }
];
// let i=0;
// while(i<=stu.length){
//     console.log(stu[i]);
//     i++    
// }
//===========================================================
var i = 0;
do {
    i++;
    console.log(stu[i]);
} while (i <= stu.length);
