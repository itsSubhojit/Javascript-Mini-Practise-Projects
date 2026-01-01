let addtask = document.querySelector("#addTaskBtn");
let inp = document.querySelector("#taskInput");


function savetolocalstorage(obj){
        if(localStorage.getItem("tasks") === null){
            let oldtasks = [];
            oldtasks.push(obj);
            localStorage.setItem("tasks", JSON.stringify(oldtasks));
        }else{
            let oldtasks = localStorage.getItem("tasks");
            oldtasks = JSON.parse(oldtasks);
            oldtasks.push(obj);
            localStorage.setItem("tasks", JSON.stringify(oldtasks));
        }
    }


addtask.addEventListener("click", function(dets){
    dets.preventDefault();
    //console.log(dets);
    
});

savetolocalstorage();
