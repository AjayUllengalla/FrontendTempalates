function show() {
    alert('Hello From Function')
}

let btn = document.getElementById("btn");
btn.onclick = function() {
    alert('Hello From Event Binder')
}

let btn1 = document.getElementById("btn1")
btn1.addEventListener("click",show1)

function show1(){
    alert('Hello From Event Listener')
}