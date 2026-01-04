function createToaster(config){
    return function(str){
    let div = document.createElement("div");
    div.textContent = str;
    div.className = "fixed parent p-10 flex flex-col gap-2";

    document.querySelector(".parent").appendChild(div);
    };
}

let toaster = createToaster({
    postionX:"left",
    postionY:"top",
    theme:"light",
    duration:3,
});

toaster("Welcome To Notification Test!")