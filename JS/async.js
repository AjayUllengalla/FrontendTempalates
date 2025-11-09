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


