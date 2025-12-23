const users = [
  {
    name: "ananya sen",
    // Added ?auto=format&fit=crop&w=400&q=80 to all URLs
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    bio: "soft heart, sharp mind 🌙 | music heals everything",
  },
  {
    name: "aneeta malhotra",
    pic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
    bio: "romanticizing life one sunset at a time 🌅",
  },
  {
    name: "naina kapoor",
    pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    bio: "lowkey obsessed with aesthetics ✨",
  },
  {
    name: "sakshi verma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "chaotic thoughts, calm vibe 🖤",
  },
  {
    name: "pallavi joshi",
    pic: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80",
    bio: "finding beauty in ordinary days 🌸",
  },
  {
    name: "megha arora",
    pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80",
    bio: "dream big, stay grounded ☁️",
  },
  {
    name: "tanvi sharma",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "less talking, more observing 👀",
  }
];


function showusers(arr){
    arr.forEach((user) => {

        // make a card div
        const card = document.createElement("div");
        card.classList.add("card");

        // adding user pic into img
        const img = document.createElement("img");
        img.src = user.pic;

        // make a content div
        const content = document.createElement("div");
        content.classList.add("content");

        // adding user name into nm
        const nm = document.createElement("h2");
        nm.textContent = user.name;

        // adding user bio into bio
        const bio = document.createElement("p");
        bio.textContent = user.bio;

        // putting users name and bio into content div
        content.appendChild(nm);
        content.appendChild(bio);

        // putting users img & content div inside card div
        card.appendChild(img);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);
    });
}

showusers(users);

let inp = document.querySelector("#searchInput");
let error = document.querySelector("#error");

inp.addEventListener("input", ()=>{
    let newusers = users.filter((user)=>{
        return user.name.startsWith(inp.value);
    });
    
    if(newusers.length === 0 && inp.value !== ""){
            document.querySelector("#error").style.display = "block";
            document.querySelector("#error").textContent = "No Users Found!"
        }else{
            error.style.display = "none";
        }

    document.querySelector(".cards").innerHTML = "";
    showusers(newusers);
})