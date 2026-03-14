let generate = document.querySelector("#generate");
let lowercaseAllowed = document.querySelector("#lowercase");
let numberAllowed = document.querySelector("#numbers");
let symbolsAllowed = document.querySelector("#symbols");
let resultBox = document.querySelector("#result")
let copy = document.querySelector("#copy");
let lengthInput = document.querySelector("#length");


function passwordGenerator(e){
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let symbols = "@#$%&*[]=!";

    if (lowercaseAllowed.checked) {
    str += lowercase;
}

    if (numberAllowed.checked) {
    str += num;
}

if (symbolsAllowed.checked) {
    str += symbols;
}

    let length = Number(lengthInput.value);

    if (length<6 || length>20){
            alert('It Can Generate a Password min 6 and max 20')
            return;
        }
        
    for(let i=0; i<length; i++){

        let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);
    }

    document.querySelector("#result").value = pass;
}

generate.addEventListener("click", function(){
    passwordGenerator();
})

copy.addEventListener("click", function(){
    resultBox.select();
    navigator.clipboard.writeText(resultBox.value);
})