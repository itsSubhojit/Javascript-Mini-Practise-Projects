let signupform = document.querySelector("#signupForm");
let fullname = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmpassword = document.querySelector("#confirmPassword");
let togglepassword = document.querySelector("#togglePassword");
let toggleconfirm = document.querySelector("#toggleConfirm");

signupform.addEventListener("submit", function (dets){    
    dets.preventDefault();

    // after correcting all fields, then removing errors messages
    document.querySelector("#successMsg").textContent ="";
    document.querySelector("#nameError").textContent ="";
    document.querySelector("#emailError").textContent ="";
    document.querySelector("#passwordError").textContent ="";
    document.querySelector("#confirmError").textContent ="";

    // custom made regex code from chatgpt
    const fullnamerejex = /^[A-Za-z ]{6,}$/;
    const emailrejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    const passwordrejex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;
    
    // cheking all things are following custom regex code wise or not
    let fullnamer = fullnamerejex.test(fullname.value);
    let emailr = emailrejex.test(email.value);
    let passwordr = passwordrejex.test(password.value);

    let isvalid = true;

    if(!fullnamer){
        document.querySelector("#nameError").textContent ="Min 6 characters. Letters and spaces only. No numbers or symbols";
        document.querySelector("#nameError").style.display ="block";
        isvalid = false;
    }

    if(!emailr){
        document.querySelector("#emailError").textContent ="please write a valide email";
        document.querySelector("#emailError").style.display = "block";
        isvalid = false;
    }

    if(!passwordr){
        document.querySelector("#passwordError").textContent ="password must be 8 chars mix of letters (a-z, A-Z) numbers (0-9) & symbols (@$!%*?&)";
        document.querySelector("#passwordError").style.display = "block";
        isvalid = false;
    }

    // cheking password value same as in confirmpassord value or not, if not? then showing this error 
    if(confirmpassword.value !== password.value){
        document.querySelector("#confirmError").textContent ="please check your password";
        document.querySelector("#confirmError").style.display ="block";
        isvalid = false;
    }

    if (isvalid){
        document.querySelector("#successMsg").textContent ="All are OKK!";

    document.querySelector("#name").value ="";
    document.querySelector("#email").value ="";
    document.querySelector("#password").value ="";
    document.querySelector("#confirmPassword").value ="";
    }
    


/*
    if(password === confirmpassword){
        document.querySelector("#confirmError").style.display ="none";  
    }else{
        document.querySelector("#confirmError").textContent ="password & confirm pasword will be same";
    }
*/






/*
    if(fullname.value.length >=3){
        document.querySelector("#hide").style.display = "none";
    }else{
        document.querySelector("#hide").style.cssText = "display:block; color:red";
    } */
});


// *** galat ho raha hai subha uth ke check karna***
 togglepassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        //confirmpassword.type = "text";
        //togglepassword.textContent = "Hide";
        //toggleconfirm.textContent = "Hide";
        togglepassword.classList.add("active");
    } else {
        password.type = "password";
        //confirmpassword.type = "password";
        //togglepassword.textContent = "Show";
        //toggleconfirm.textContent = "Show";
        togglepassword.classList.remove("active");
    }
});

    toggleconfirm.addEventListener("click", function () {
    if (confirmpassword.type === "password") {
        //password.type = "text";
        confirmpassword.type = "text";
        //togglepassword.textContent = "Hide";
        //toggleconfirm.textContent = "Hide";
        toggleconfirm.classList.add("active");

    } else {
        //password.type = "password";
        confirmpassword.type = "password";
        //togglepassword.textContent = "Show";
        //toggleconfirm.textContent = "Show";
        toggleconfirm.classList.remove("active");
    }
});



