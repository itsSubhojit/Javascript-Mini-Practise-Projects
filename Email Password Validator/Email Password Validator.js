let form = document.querySelector("#form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function(dets){
    dets.preventDefault(); // form refresh or submit rokhne ke liye

    // form submit karne ke baad jo vi likha hua tha wo ab blaank ho jaayega
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#password-error").textContent = "";

    /*if (email= ""){
        document.querySelector("#email-error").textContent = "empty field not allowed"
    }*/

    //custom regex code to check email and password correct or not
    const emailrejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    const passwordrrejex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;

    //chercking email and password value are matching to our custom regex or not?
    let emailr = emailrejex.test(email.value);
    let passwordr = passwordrrejex.test(password.value);

    //bydefault ye field true hai
    let isvalid = true ;

    //agar email galat hai toh ye code chalega or isvalid = false hau toh ye msg show karega
    if(!emailr){
        document.querySelector("#email-error").textContent = "your info is incorrect";
        document.querySelector("#email-error").style.display = "intial";
        isvalid = false;
    }

    //agar password galat hai toh ye code chalega or isvalid = false hau toh ye msg show karega
    if(!passwordr){
        document.querySelector("#password-error").textContent = "your info is incorrect";
        document.querySelector("#password-error").style.display = "intial";
        isvalid = false;
    }

    // agar sab kuch vi error nehi hai toh ye msg last mai submit hone ke turant show karega
    if(isvalid){
        document.querySelector("#resultmessage").textContent = "You Are Good To Go!";
    }
    
})


