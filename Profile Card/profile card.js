let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
/*  console.log(input[0].value);
    console.log(input[1].value);
    console.log(input[2].value);
    console.log(input[3].value);
    console.log(input[4].value);*/

let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div")
profile.classList.add("profile");

let img = document.createElement("img")
img.setAttribute("src", input[0].value);

let Name = document.createElement("h3")
Name.textContent = input[1].value;

let Age = document.createElement("h4")
Age.textContent = input[2].value;

let Email = document.createElement("h5")
Email.textContent = input[3].value;

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(Name);
card.appendChild(Age);
card.appendChild(Email);

main.appendChild(card);

input.forEach(inp => {
    if (inp.type !== "submit")
        inp.value = "";
});

});



