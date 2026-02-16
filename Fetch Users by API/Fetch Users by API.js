function getUsers(){
    fetch("https://randomuser.me/api/?results=3")
.then((raw)=> raw.json())
.then((data)=>{
    document.querySelector(".users").innerHTML="";

    data.results.forEach(function (user) {
        // Outer Card
const card = document.createElement("div");
card.className = "bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs w-4/5";

// Image
const img = document.createElement("img");
img.src = user.picture.large;
img.alt = "User Avatar";
img.className = "w-16 h-16 rounded-full mx-auto mb-2";

// Name
const name = document.createElement("h2");
name.className = "text-lg font-bold text-center text-white mb-1";
name.textContent = user.name.first+" "+user.name.last;

// Email
const email = document.createElement("p");
email.className = "text-center text-gray-400 mb-2 text-xs";
email.textContent = user.email;


// Role
const role = document.createElement("p");
role.className = "text-center text-gray-400 mb-2 text-sm";
//role.textContent = "Web Developer";

// Bio
const bio = document.createElement("p");
bio.className = "text-center text-gray-300 mb-4 text-xs";
//bio.textContent = "Passionate about building amazing web applications with modern technologies.";

// Button container
const btnContainer = document.createElement("div");
btnContainer.className = "flex gap-3 mt-4";

// Follow Button
const followBtn = document.createElement("button");
followBtn.className =
  "flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm";
followBtn.textContent = "Follow";

// Message Button
const messageBtn = document.createElement("button");
messageBtn.className =
  "flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm";
messageBtn.textContent = "Message";

// Append Buttons
btnContainer.appendChild(followBtn);
btnContainer.appendChild(messageBtn);

// Append All to Card
card.appendChild(img);
card.appendChild(name);
card.appendChild(email);  
card.appendChild(role);
card.appendChild(bio);
card.appendChild(btnContainer);

// Finally append card somewhere
document.querySelector(".users").appendChild(card);
    });
});

}

getUsers();

document.querySelector("#refreshBtn").addEventListener("click", function(){
    getUsers();
})
