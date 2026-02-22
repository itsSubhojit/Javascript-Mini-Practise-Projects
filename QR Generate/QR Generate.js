let generateBtn = document.querySelector("#generate");
let deleteBtn = document.querySelector("#delete");
let inpbox = document.querySelector("#inpbox");
const img = document.querySelector("img");
const loader = document.querySelector(".loader");

generateBtn.addEventListener("click", function(){
    
    const inp = inpbox.value.trim();
    if(inp === ""){
        alert('Please enter a URL');
        return;
    }

    try{
        new URL(inp);
    }catch{
        alert('PLease enter a valid URL');
        return;
    }

    const encodeURL = encodeURIComponent(inp);

    loader.style.display = "block";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURL}`;
        img.onload = function(){
            loader.style.display = "none";
            img.style.display = "block";
            img.classList.add("show");
            }
    inpbox.value = "";
})

deleteBtn.addEventListener("click", function(){
    img.src = "";
    img.style.display = "none";
})
