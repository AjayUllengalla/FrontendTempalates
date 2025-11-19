 let text;
    let btn = document.createElement("button")
    btn.textContent = "Add"
    document.getElementById("to-add").appendChild(btn)
    btn.classList.add("btn")
let listItem;
    btn.addEventListener("click", () => {
        // console.log("hello")
         listItem = document.createElement("li")
        text = document.getElementById("input").value
        listItem.textContent = text 
        document.getElementById("list").appendChild(listItem)
         listItem.classList.add("li-items")
    })
    let btn2 = document.createElement("button")
    btn2.textContent="Delete"
    document.getElementsByClassName("li").appendChild(btn2)