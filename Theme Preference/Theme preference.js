let themebtn = document.querySelector("#themeBtn");

// OS theme → string
let save = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? "dark"
  : "light";


if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
}else{
     document.body.classList.add(save);
  localStorage.setItem("theme", save);
}


themebtn.addEventListener("click", ()=>{
    if(document.body.classList.contains("dark")){
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
});

