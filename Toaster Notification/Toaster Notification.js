function createToaster(config){
    return function(str){
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity`;

    document.querySelector(".parent").appendChild(div);

    if(config.positionX !== "left" || config.positionY !== "bottom"){
        document.querySelector(".parent").className += ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "top" ? "top-5" : "bottom-5"}`;
    }

    setTimeout(()=>{
        document.querySelector(".parent").removeChild(div)
    }, config.duration*1000);
    };
}

let toaster = createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3,
});

toaster("Toh Kaise Hai Aap Log");
setTimeout(()=>{
    toaster("Hello Ji, Mera Naam Hai.... ");
}, 1500);

setTimeout(()=>{
    toaster("Accha chalta hoon, Duaaon mein yaad rakhna 🚶‍♂️🙏");
}, 4000);
