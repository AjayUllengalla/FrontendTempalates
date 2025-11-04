let arr = [1,2,3,4,5,6];
arr.pop();
console.log("using pop method "+ arr)
arr.push(25);
console.log("Push Method "+ arr);
arr.shift()
console.log("Shift Method "+ arr);
arr.unshift(26);
console.log("Unshift method "+ arr);

//Splice Method 

arr.splice(0,1);
console.log("Using Splice "+arr); // Element removed at first element
arr.splice(1,0,25,45,66);
console.log("Elements added after 1 index "+arr); // Elements added
arr.splice(4,0,52); // added element 52 at 4th index
console.log(arr);

//Search Methods

let fruits = ["Apple","Banana","Mango","Kiwi"];
let res = fruits.indexOf("Kiwi"); // used to find the index position of element
console.log("index position of kiwi "+res);
res = fruits.indexOf("Apple"); // used to find the index position of element
console.log("index position of Apple "+res);
res = fruits.indexOf("Banana"); // used to find the index position of element
console.log("index position of Banana "+res);

//lastIndexOf()
fruits.splice(1,0,"Kiwi")
res = fruits.lastIndexOf("Kiwi"); //It Searches total array until find last index position
console.log("index of kiwi "+res);
res = fruits.lastIndexOf("Kiwi",3); // here it searches until index number given 
console.log(res);
fruits.splice(4,0,"Mango","Banana","Apple");
console.log( fruits);
console.log(fruits.lastIndexOf("Mango",3));

// includes
res = fruits.includes("Orange");
console.log(res);
console.log(fruits.includes("apple")); // js is case sensitive so it will be false
console.log(fruits.includes("Apple")); // it will be true


//find() method
let array = [1000,2000,3000,4000,5000,6000];
let result = array.find((ele)=> { 
    return ele > 1000;
});
console.log(result); // it will find the element and returns that element no further checks not continues 

result = array.find((ele) => {
    return ele >= 3000;
});
console.log(result);

result = fruits.find((ele) => {
    return ele.indexOf("kiwi");
});
console.log(res);

result = array.findIndex((ele) => {
    return ele > 3000;

});
console.log(result); // it returns the index position of the Element

//filter()
res = array.filter((ele)=>{
    return ele > 3000; // it will returns the all the values or elements after condition match

});
console.log(res);

//map()

res = array.map((ele) => // this method returns the original array without changing in its length
{
    return ele > 4000;
})
console.log(res); 
res = fruits.map((ele) => {
    return ele.includes("Apple");
})
console.log(res);
res = fruits.map((ele) => {
    return ele.indexOf("Apple");
})
console.log(res);


//sort
let fruitName =["Kiwi","Mango","orange","Apple"];
console.log(fruitName.sort());
let nums = [4,2,5,6,1,7,15,8,11,9];

let newArray = nums.sort();
console.log(newArray);
newArray = nums.sort((x,y) =>{
    if(x > y){
        return 1
    } if(x < y){
        return -1
    } if( x == y){
        return 0
    }
});
console.log(newArray);

//slice 
  newArray = nums.slice(5);
  console.log(newArray);
console.log(nums.slice(1,4));
console.log(" ")
str = "Hello JavaScript";
console.log(str.slice(3,7));

//join
console.log(fruitName.join("-"));
console.log(fruitName.join(","));
console.log(fruitName.join("/"));

//reverse

let str1 = ["Hello","Apple","Bat","Ant"];
console.log(str1.reverse());
let arrays =[2,6,15,1,46,25,86,10];
console.log(arrays.reverse()); //reversing the array