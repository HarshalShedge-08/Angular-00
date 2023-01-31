//simple function
// function fun(){
// console.log('hello world');
// }
// fun()
//===================================
//parameterized function
// function fun(a,b){
//     console.log(a+b);
//     }
//     fun(10,20)
//===================================
//return function
// function fun(a:number,b:number){
//     let fun=a+b
//     return fun
// }
// let x=fun(10,20)
// console.log(x);
function fun(a) {
    var fun = a;
    if (a <= 50) {
        return 'you are fail';
    }
    else {
        return 'you are pass';
    }
}
var x = fun(50);
console.log(x);
