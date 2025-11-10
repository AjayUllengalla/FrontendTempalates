// merging two arrays into array of objects

//finding element index if not found return -1

let arr =[2,4,5,6,7,8,"arr","bb","cc"]

let res = ((arr,value) => {
    if(arr.includes(value)) {
        return arr.indexOf(value);
    } else {
        return -1;
    }
});
console.log(res(arr,9));

//3.	How would you determine whether a variable is a number, a string, or an boolean  in JavaScript?

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