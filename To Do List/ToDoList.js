const inp = document.getElementById("taskInput");
const container =document.getElementById("taskList");
const btn = document.getElementById("addTaskBtn");

btn.addEventListener("click", function(){
    if(inp.value === ""){
        alert('Please Write Something!')
    }else{
        let li = document.createElement("li");
        li.innerHTML = `<span class="task-text">${inp.value}</span>`;

        // Create action buttons container
        let div = document.createElement("div");
        div.className = "actions";
        
        // Add Edit button
        let editBtn = document.createElement("span");
        editBtn.innerHTML = "✎"; // Edit icon
        editBtn.className = "edit-btn";
        
        // Add Delete button
        let delBtn = document.createElement("span");
        delBtn.innerHTML = "\u00d7"; // Cross icon
        delBtn.className = "delete-btn";
        
        div.appendChild(editBtn);
        div.appendChild(delBtn);
        li.appendChild(div);
        container.appendChild(li);
        
        inp.value = "";
    }
    savedata();
});

// Checked or Not?
container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    // Delete Task
    else if (e.target.className === "delete-btn") {
        e.target.parentElement.parentElement.remove();
        savedata();
    }
    // Edit Task
    else if (e.target.className === "edit-btn") {
     let li = e.target.parentElement.parentElement;
     let taskText = li.querySelector(".task-text");
     let newVal = prompt("Edit your task:", taskText.innerText);
       if (newVal !== null && newVal.trim() !== "") {
           taskText.innerText = newVal;
        savedata();
    }
}
}, false);
    


// Saving Data or Task in LocalStorage
function savedata(){
    localStorage.setItem("task", container.innerHTML);
}

function showdata(){
    container.innerHTML = localStorage.getItem("task");
}
showdata();

