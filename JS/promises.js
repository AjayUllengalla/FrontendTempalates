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

 Promise.allSettled([pr1,pr2,pr3]).then((res)=> {
    console.log(res)
 })
