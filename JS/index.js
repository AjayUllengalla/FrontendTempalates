// // variable creation
var age = 25;
console.log(age);
age = 36;
console.log(age);

//let
let age1=36;
 age1 = 25;
 console.log(age1);

 // const
const rd = 20;

console.log(rd);

// //functions

function add(a,b){
    console.log(a + b);

}
add(10,12);

let a = 25;
let b = 66;

function sub(a,b) {
     console.log(a - b);
}
sub();

//anonymous function
let greet = function() {
    console.log("hello Using Anonymous Function")
};
greet();

//Arrow  Function

let sum = (x,y)=> {
    console.log(x+y);
};
sum(25,46);

//scope

let text="hello from Global";

function greets() {
    console.log(text);
    let text2 = " hello From Local Scope";
    console.log(text2);
};

greets();
greets();


