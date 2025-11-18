let cnt =0;
// function start() {
//     setTimeout(()=> {
//         document.getElementById("text").innerHTML=cnt
//         cnt++
//     },500)
// }

let objStop;
function start(){
    setInterval(()=> {
       objStop= document.getElementById("text").innerHTML=cnt
        cnt++
    },1000)
}

function stop() {
    clearInterval(objStop);
}

document.getElementById("items").addEventListener("click",(e)=>{
let terget =e.target.textContent
console.log(terget)
})