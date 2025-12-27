let addbtn = document.querySelector("#plus");
let closebtn = document.querySelector("#close");
let form = document.querySelector("#form");
let container = document.querySelector(".app-container");


let imageurl = document.querySelector("#imageurl");
let fullname = document.querySelector("#fullname");
let hometown = document.querySelector("#hometown");
let purpose = document.querySelector("#purpose");

let controlbtn =document.querySelector("#controlBtn");
let upbtn = document.querySelector("#upBtn");
let downbtn = document.querySelector("#downBtn");
let dots = document.querySelector("#sidedots");

let categoryradio = document.querySelectorAll("input[name='category']");

// save to localstorage
function savetolocalstorage(obj){
    if(localStorage.getItem("tasks") === null){
        let oldtasks = [];
        oldtasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldtasks));
    }else{
        let oldtasks = localStorage.getItem("tasks");
        oldtasks = JSON.parse(oldtasks);
        oldtasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldtasks));
    }
}

// open form
addbtn.addEventListener("click", () => {
  form.style.display = "block";
  container.style.display = "none";
  dots.style.display = "none";
  controlbtn.style.display = "none";
});

// close form
closebtn.addEventListener("click", () => {
  form.style.display = "none";
  container.style.display = "block";
  dots.style.display = "flex";
  controlbtn.style.display = "flex";
});

// submit form and Validation full form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const image = imageurl.value.trim();
  const full = fullname.value.trim();
  const homet = hometown.value.trim();
  const purposenew = purpose.value.trim();

let selected = false;
categoryradio.forEach((cat) => {
    if(cat.checked){
      selected = cat.value;
    }

});

if(image === ""){
    alert("Please Enter a Valid URL");
    return;
}

if(full === ""){
    alert("Please Enter Your FullName");
    return;
}

if(homet === ""){
    alert("Please Enter Your HomeTown");
    return;
}

if(purposenew === ""){
    alert("Please Enter Your Purpose");
    return;
}

if(!selected){
    alert("Please Select a Category");
    return;
}
 
   savetolocalstorage({
    image,
    full,
    homet,
    purposenew,
    selected,
   });

  form.reset();
  form.style.display = "none";
  showcards();

  updateActiveCard();
  container.style.display = "block";
  dots.style.display = "flex";
  controlbtn.style.display = "flex";

});


// Add this default data object at the top of your script
const defaultData = {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    full: "Rebecca Alter",
    homet: "Russia",
    purposenew: "Modelling",
    selected: "Emergency" // This ensures the red dot shows for the default card
};

function showcards() {
    container.innerHTML = "";
    let tasksData = localStorage.getItem("tasks");
    
    // 🔥 FIX: If no data exists, save the default person and try again
    if (!tasksData) {
        localStorage.setItem("tasks", JSON.stringify([defaultData]));
        tasksData = localStorage.getItem("tasks");
    }

    let alltasks = JSON.parse(tasksData);

    alltasks.forEach(function (task) {
        const card = document.createElement("div");
        card.classList.add("card", "profile-card", "stacked");

        // Create and add the Glowing Dot
        const statusDot = document.createElement("div");
        statusDot.classList.add("status-dot");
        // Remove spaces for class names (e.g., "No Rush" becomes "NoRush")
        statusDot.classList.add("dot-" + task.selected.replace(/\s+/g, '')); 
        card.appendChild(statusDot);

        const profileHeader = document.createElement("div");
        profileHeader.classList.add("profile-header");

        const img = document.createElement("img");
        img.src = task.image;
        profileHeader.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = task.full;

        const infoRow1 = document.createElement("div");
        infoRow1.classList.add("info-row");
        infoRow1.innerHTML = `<span class="label">Home town</span><span class="value">${task.homet}</span>`;

        const infoRow2 = document.createElement("div");
        infoRow2.classList.add("info-row");
        infoRow2.innerHTML = `<span class="label">Purpose</span><span class="value">${task.purposenew}</span>`;

        const actionButtons = document.createElement("div");
        actionButtons.classList.add("action-buttons");
        actionButtons.innerHTML = `
            <button class="btn btn-black"><span class="material-icons-round">call</span> Call</button>
            <button class="btn btn-light">Message</button>
        `;

        card.append(profileHeader, name, infoRow1, infoRow2, actionButtons);
        container.appendChild(card);
    });

    updateActiveCard(); // Ensures the default card is visible immediately
}

showcards();

function updatecards() {
  for (let i = 0; i < 3; i++) {
    container.style.zIndex = 3 - i;
    // Use backticks `` instead of '' for ${} to work
    container.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
    container.style.opacity = `${1 - i * 0.02}`;
  }
}

// ===== CARD ROTATION LOGIC =====
upbtn.addEventListener("click", function () {
  const last = container.lastElementChild;
  if (last) {
    container.insertBefore(last, container.firstElementChild);
    updateActiveCard();
  }
});

downbtn.addEventListener("click", function () {
  const first = container.firstElementChild;
  if (first) {
    container.appendChild(first);
    updateActiveCard();
  }
});

function updateActiveCard() {
  const cards = container.querySelectorAll(".card");
  cards.forEach(card => card.classList.remove("active"));
  if (cards.length > 0) {
    cards[0].classList.add("active");
  }
}
updateActiveCard();
