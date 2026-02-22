let generateBtn = document.querySelector("#generate");
let deleteBtn = document.querySelector("#delete");
let inpbox = document.querySelector("#inpbox");
const img = document.querySelector("img");

generateBtn.addEventListener("click", function(){
    const inp = inpbox.value.trim();

    if(inp === ""){
        alert('Please enter a valid URL');
        return;
    }else{
        function qr(){
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inp}`;

            img.style.display = "block";
        }
    }

    qr();
    
})



