
//decision making
let age =18
if(age >= 18){
    console.log("Eligible for vote")
} else if(age >=16){
    console.log("Nearly Eligible for vote")
} else {
    console.log("Not ELigible")
}
age =16
if(age >= 18){
    console.log("Eligible for vote")
} else if(age >=16){
    console.log("Nearly Eligible for vote")
} else {
    console.log("Not ELigible")
}

if(true){
    console.log("The Condition is true")
} else {
    console.log("Condition is false");
}
let res = false;
if(res){
    console.log("Condition is true")
} else {
    console.log("Condition is false")
}
age = 17
let result = age >=  18 ? "Eligible" : age>=16 ? "Nearly Eligibe":"Not Eligible";
console.log(result)
let marks=45;
result = marks >=90?"A grade":marks >=75?"B Grade":marks >=60?"c Grade":marks>=40?"D Grade":"Failed";
console.log(result)

//switch

let varName = 3

switch(varName){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3: 
    console.log("Three")
    break;
    case 4:
        console.log("Four")
        break;
    case 5: 
    console.log("five")
    break;
default:
    console.log("Not a Number");
}

//loops
for(let i=0;i<=15;i++) {
    console.log(i);
}
let i =0;
while(i <=10){
    console.log("Hello " +i)
    i++;
}

//do while

i =1
do {
    console.log(i)
} while(i <1)