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

function show2() {
    alert('Mouse Event when leave cursor from button')
}

//Event Bubbling

let btn4 =document.getElementById("btn4");
btn4.addEventListener("click",()=>{
    event.stopPropagation()
    alert("Hello from Button Event Bubling");
})

let div = document.getElementById("div")
div.addEventListener("click",()=> {
    alert("Hlelo From Div Event bubbling")  // to stop this we event.stopPropagation
})


//Event Capturing

function showEventCapturing(){
    alert('hello div from Event Capturing')
}

function eventcpaturing() {
    event.stopPropagation();
    alert("Button from Event Capturing")
}
