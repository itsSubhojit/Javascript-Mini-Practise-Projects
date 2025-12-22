let show = document.querySelector("#showBtn");
//let alert = document.querySelector("#alertBox")

show.addEventListener("click", ()=>{
   let tm = setTimeout(()=>{
    document.querySelector(".alert").style.display = "none"; 
    show.style.display = "block";
    //document.querySelector(".alert").style.display = "block";
   },3000 );
   //document.querySelector(".alert").style.display = "none"; 
   document.querySelector(".alert").style.display = "block";
   show.style.display = "none";
});
