let btn = document.createElement("button");
btn.textContent = "Add";
document.getElementById("to-add").appendChild(btn);
btn.classList.add("btn");

btn.addEventListener("click", () => {
    let text = document.getElementById("input").value;
    let listItem = document.createElement("li");
    listItem.classList.add("li-items");
    listItem.textContent = text;

    // Create delete button
    let btn2 = document.createElement("button");
    btn2.textContent = "Delete";
    btn2.classList.add("del-button");

    
    btn2.addEventListener("click", () => {
        listItem.remove();
    });

    // Append delete button inside li
    listItem.appendChild(btn2);

    
  document.getElementById("list").appendChild(listItem);

    document.getElementById("input").value = "";

    let editBtn = document.createElement("button");
    editBtn.textContent="Edit"
    listItem.appendChild(editBtn)
    editBtn.classList.add("editBtn")

    editBtn.addEventListener("click",()=>{
        document.getElementById("input").value = listItem.textContent
    })
      
});

