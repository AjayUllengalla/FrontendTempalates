let text;
let empty = '';
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
    // document.getElementById("list-div").appendChild(listItem)
    document.getElementById("list").appendChild(listItem)

    listItem.classList.add("li-items")
    
    let btn2 = document.createElement("button")
    btn2.textContent = "Delete"
    btn2.classList.add("del-button")
    // document.getElementById("list-div").appendChild(btn2)

    btn2.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(btn2)
    document.getElementById("list").appendChild(listItem)

     document.getElementById("input").value = "";
});
// text=document.getElementById("input").value=" ";
// listItem.textContent=text;
// document.getElementById("list").appendChild(listItem)




