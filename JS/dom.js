//Document Object Model

let domExampleRes = document.getElementById("text");
console.log(domExampleRes)

domExampleRes = document.getElementsByClassName("content")
console.log(domExampleRes)

domExampleRes = document.getElementsByClassName("innerContent");
console.log(domExampleRes)
console.log(domExampleRes[1]) //welcome
console.log(domExampleRes[0]) 
console.log(domExampleRes[2]) 

domExampleRes = document.querySelectorAll("text")
console.log(domExampleRes)

domExampleRes = document.getElementsByClassName("text");
console.log(domExampleRes)


// let onClick = document.getElementsByName("name");
// console.log(onClick)
