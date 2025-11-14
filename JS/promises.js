let pr1 = new Promise((res,rej) => {
    res("Hello Promise Resolved")
});

let pr2 = new Promise((res,rej) => {
    res("Hello Promise2 Rejected")
})
let pr3 = new Promise((res,rej) => {
    res("Hello Promise3 Resolved");
})
 Promise.all([pr1,pr2,pr3]).then((res) => {
    console.log(res)
 })

 Promise.allSettled([pr1,pr2,pr3]).then((res)=> { //allSettled Method
    console.log(res)
 })

//race
 let pr4 = new Promise((res,rej) => {
    res("Hello Promise1 Resolved") 
},500);

let pr5 = new Promise((res,rej) => {
    rej("Hello Promise2 Rejected")
},2000)
let pr6 = new Promise((res,rej) => {
    res("Hello Promise3 Resolved");
},1000)

Promise.race([pr4,pr5,pr6]).then((res)=> {
    console.log(res)
})

//any
let pr7 = new Promise((res,rej) => {
    rej("Hello Promise1 Resolved") 
},500);

let pr8 = new Promise((res,rej) => {
    rej("Hello Promise2 Rejected")
},2000)
let pr9 = new Promise((res,rej) => {
    res("Hello Promise3 Resolved");
},1000)
Promise.any([pr7,pr8,pr9]).then((res)=> {
    console.log(res)
})