let count = 0;
let seconds = 3;
let start = document.querySelector("#startBtn");
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector("#percentage");

start.addEventListener("click", ()=>{
    let tm = setInterval( ()=>{
    if(count<=99){
        count++;
        progress.style.width =  `${count}%`;
        percent.textContent = `${count}%`;
    }else{
        document.querySelector("h2").textContent = "File Downloaded." ;
        clearInterval(tm);
        start.style.display = "none";
    }
}, (seconds * 1000)/100 );
});

