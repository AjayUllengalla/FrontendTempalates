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