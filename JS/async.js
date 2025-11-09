console.log("Start");
console.log("Middle");
console.log("Third");
console.log("End"); //Syncronous Process line by line execution

//asyncronous function

console.log("Start");
for(let i=0;i<=100;i++){
    console.log(i);
    
}
console.log("Middle"); // here line by line execution is going 
console.log(" ")


console.log("Start"); //syncronous

setTimeout(()=>{
    for(let i=0;i<=100;i++){ // here  async function we are used setTimeOut() method 
    console.log(i);
    
}
},1000);
console.log("Middle"); //syncronous



console.log(" ");
//promises

let promise = new Promise((resolve,reject)=> {
    resolve("Hello Promise Resolved");
});
promise.then((res) => {
    console.log(res)  //resolved promise used then for result
});

//reject promise

let promise1 = new Promise((resolve,reject) => {
    reject("Something Went Wrong");
});

promise1.catch((error) =>{
    console.log(error); // rejected promise catched using catch()
});

//example with Condition Check

let a = 10;
let b=11;
let promise2 = new Promise((resolve,reject)  => {
    if(a==b){
        resolve("Condtion is Satisfied");
    } else {
        reject("Condition not satisfied"); //here condition is false
    }
});

promise2.then((res) => {
    console.log(res);
});
promise2.catch((error) => {
    console.log(error); //we get error that condition not satisfied throws error
})