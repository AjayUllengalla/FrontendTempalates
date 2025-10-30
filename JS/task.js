let name = "Ajay";
let age = 22;
let city = "Hyderabd";
console.log("My name is "+name+ ", I am "+age+ " and I live in "+ city);

console.log("");

let a=20;
let b = 35;
let sum = 0;

function add(){
    return a + b;
};

 sum = add();
console.log("The sum of two numbers using function :"+ sum);


console.log(" ");


function sayHello(str){
    console.log("Hello "+ str+ ", welcome to javaScript");
};

sayHello("Ajay");

console.log(" ")

let intvalue = 25;
let floatvalue = 25.26;

let booleanValue = false;
let str = "Ajay";

let value;

let value1 = null;

console.log(typeof intvalue);
console.log(typeof floatvalue);
console.log(typeof booleanValue);
console.log(typeof str);
console.log(typeof value);
console.log(typeof value1);

console.log(" ");

function evenOrOdd(num){
    if(num % 2 == 0){
        console.log("The Given Number is Even");
    } else {
        console.log("The Given Number is Odd");
    }
}
evenOrOdd(6);

