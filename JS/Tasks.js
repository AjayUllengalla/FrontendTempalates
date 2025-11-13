// merging two arrays into array of objects

const names = ['Alice', 'Bob', 'Charlie']; 
const ages = [25, 30, 35];
let merged = [];
for(let i=0;i<names.length;i++){
    merged.push({name:names[i],age:ages[i]});

}
console.log(merged);


//finding element index if not found return -1

// let arr =[2,4,5,6,7,8,"arr","bb","cc"]

// let res = ((arr,value) => {
//     if(arr.includes(value)) {
//         return arr.indexOf(value);
//     } else {
//         return -1;
//     }
// });
// console.log(res(arr,9));

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.indexOf("app"))

// second way
// if(arr.includes(7)){
//     console.log(arr.indexOf(7));
// } else{
//     console.log(arr.indexOf(7))
// }
// console.log(" ")

//How would you determine whether a variable is a number, a string, or an boolean  in JavaScript?

let str = "Hello JavaScript";
let n=10;
let value = false;

console.log(typeof str);
console.log(typeof n);
console.log(typeof value);

//combining two arrays

const arrays = [[1, 2], [3, 4], [5, 6]];
let newArray = arrays.reduce((acc,curr) => {
    return acc.concat(curr);
})
console.log(newArray)

let newArray1 = arrays.flat();
console.log(newArray1)
console.log(" ")
// remove any negative numbers and square the remaining numbers. How would you do this using map()

const numbers = [1, -2, 3, -4, 5,6];
let newArrays = numbers.map((ele) => {
    if(ele > 0){
        return ele*ele;
    }
}).filter((value) =>{
    return value > 0;
})
console.log(newArrays)
console.log(" ")
//You want to increment every number in the array by 1, but only if the number is greater than 10. How would you do this using map()?
const numbers1 = [5, 12, 8, 15, 3, 20];
let result = numbers.map((value) => {
    if(value < 10) {
        return value;
    } else {
        return value +1
    }
})
console.log(result)
console.log(" ")
//You have an array of numbers and you need to filter out all even numbers. How would you do  this using filter()?


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result2 = numbers2.filter((value) => {
    if(value % 2 !=0){
        return value;
    }
})

console.log(result2)
console.log(" ")
//You have an array of numbers, and you need to find the sum of all the even numbers in the array. How would you do that?

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res3 = numbers3.filter((value) => {
    if(value % 2 ==0){
        return value
    }
}).reduce((acc,curr) => {
    return acc+curr
},0)
console.log(res3)
console.log(" ")

//You have an array of user objects, each with a status property. You need to filter out all users who are not active (status is 'inactive'). How would you do this using filter()?


const users = [ 
{ name: 'Alice', status: 'active' }, 
{ name: 'Bob', status: 'inactive' }, 
{ name: 'Charlie', status: 'active' }, 
{ name: 'David', status: 'inactive' } 
];
let result5 = users.filter((ele)=> {
    if(ele.status == "active") {
        return ele
    }
})
console.log(result5)

//rite a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter(count){
       function increment() {
           count++;
           return count
       }
       let reset = function () {
           return count =count;
       }
       function decrement() {
           count--;
           return count
       }
      return {
          increment,
          reset,
          decrement
      }
}

let counter = createCounter(5);
console.log(counter.reset());
console.log(counter.increment())
console.log(counter.decrement())

//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function outer(count) {
    function inner() {
        return count++;
    } return inner
}
let countResult = outer(0);
console.log(countResult())
console.log(countResult())
console.log(countResult())