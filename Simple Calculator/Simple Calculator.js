// 1. Select all buttons and the display element
const buttons = document.querySelectorAll(".btn"); // Selects all elements with the 'btn' class
const display = document.querySelector(".display");


// Adding a 'click' event listener to every button
buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const buttontext = btn.textContent;
    //display.textContent += buttontext;

    if(buttontext === "C"){
        display.textContent = "0";
    }else if( buttontext === "="){

        try{
            let equation = display.textContent;
            display.textContent = eval(equation);
        }catch{
            display.textContent = "Error";
        }

    }else if(buttontext === "⌫"){
        let newarr = display.textContent.slice(0,-1);
        display.textContent = newarr;

          if(display.textContent === ""){
            display.textContent = "0";
          }

    }
    else if (display.textContent === "0") {
      // Agar button NUMBER hai, toh 0 hata kar replace karo (=)
      if (!isNaN(buttontext) || buttontext === ".") {
        display.textContent = buttontext;
      } 
      // Agar button OPERATOR hai, toh 0 ke sath jodo (+=)
      else {
        display.textContent += buttontext;
      }
    } 
    // AGAR SCREEN PAR PEHLE SE KOI NUMBER HAI
    else {
      display.textContent += buttontext;
    }
});
});


