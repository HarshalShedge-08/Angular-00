// control statement
// 1-Conditional/Selection 
// a-if & else
// let time:number=10;
// if (time==12){
//     console.log("GOOD AFTERNOON");  
// }
// else{
//     console.log("TIME NOT MATCH");  
// }
//============================================================
//b-if else
// let time:string='5am';
// if (time>='12pm'){
//     console.log("GOOD AFTERNOON");  
// }
// else if(time<='6am'){
//     console.log('GOOD MORNING');
// }
// else if(time>='6am'){
//     console.log('GOOD EVENING');
// }
// else if(time>='9pm'){
//     console.log('GOOD NIGHT');
// }
// else{
//     console.log("TIME NOT MATCH");  
// }
//==========================================================
// -if else 
// let age:number=15;
// if(age>=18){
//     console.log('You Can Vote');
// }
// else if(age<=18){
//     console.log('You Can Not Vote');    
// }
// else {
//     console.log('Enter valid Value');    
// }
//==========================================================
//c-switch
var days = 6;
var day;
switch (days) {
    case 1:
        day = 'sunday';
        break;
    case 2:
        day = 'monday';
        break;
    case 3:
        day = 'tuesday';
        break;
    case 4:
        day = 'wednesday';
        break;
    case 5:
        day = 'thursday';
        break;
    case 6:
        day = 'friday';
        break;
    case 7:
        day = 'saturday';
        break;
}
console.log(day);
