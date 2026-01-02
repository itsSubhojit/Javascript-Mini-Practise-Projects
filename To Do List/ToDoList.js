const inp = document.getElementById("taskInput");
const container =document.getElementById("taskList");
const btn = document.getElementById("addTaskBtn");

btn.addEventListener("click", function(){
    if(inp.value === ""){
        alert('Please Write Something!')
    }else{
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        container.appendChild(li);
        inp.value = "";
    }
    savedata();
});


function savedata(){
    localStorage.setItem("task", container.innerHTML);
}

function showdata(){
    container.innerHTML = localStorage.getItem("task");
}
showdata();