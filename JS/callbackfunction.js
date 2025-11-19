function sqr(n,cb){
    setTimeout(()=> {
        cb(n*n)
    },1000)
}
sqr(2,function(res) {
    console.log(res)
    sqr(res,function(res2) {
        console.log(res2)
        sqr(res2,function(res3) {
            console.log(res3)
            sqr(res3,function(res4){
                console.log(res4)
            })
        })
    })
})

//to overcome CallBack Hell we use Promises
function cube(n){
    return new Promise((res,rej) => {
        setTimeout(()=> {
            res(n*n*n)
        })
    })
}
cube(3)
.then((res) => {
    console.log(res)
    return cube(res)
})
.then((res2)=> {
    console.log(res2)
    return cube(res2)
})
.then((res3)=> {
    console.log(res3)
    return cube(res3)
})
.then((res4)=> {
    console.log(res4)
})