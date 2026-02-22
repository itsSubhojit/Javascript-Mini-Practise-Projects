let generateBtn = document.querySelector("#generate");
let deleteBtn = document.querySelector("#delete");
let inpbox = document.querySelector("#inpbox");
const img = document.querySelector("img");

generateBtn.addEventListener("click", function(){
    
    const inp = inpbox.value.trim();

    if(inp === ""){
        alert('Please enter a valid URL');
        return;
    }

    const encodeURL = encodeURIComponent(inp);
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURL}`;

            img.style.display = "block";
            inpbox.value = "";
    
    
})

deleteBtn.addEventListener("click", function(){
    img.src = "";
    img.style.display = "none";
})

