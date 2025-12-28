// 1. Sare buttons aur display ko select karein
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

// 2. Har button ke liye click event listener
buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const buttontext = btn.textContent;

    // A. Agar Clear (C) click ho
    if (buttontext === "C") {
      display.textContent = "0";
    } 
    
    // B. Agar Equal (=) click ho
    else if (buttontext === "=") {
      try {
        let equation = display.textContent;
        display.textContent = eval(equation);
      } catch {
        display.textContent = "Error";
      }
    } 
    
    // C. Agar Backspace (⌫) click ho
    else if (buttontext === "⌫") {
      let currentText = display.textContent;
      let newText = currentText.slice(0, -1);
      
      // Agar hatane ke baad kuch na bache, toh 0 dikhao
      if (newText === "") {
        display.textContent = "0";
      } else {
        display.textContent = newText;
      }
    } 
    
    // D. Agar display par "0" hai
    else if (display.textContent === "0") {
      // Agar button ek Number hai, toh 0 ko replace kardo
      // Agar button ek Operator (+, -, *, /) hai, toh 0 ke sath rehne do
      if (!isNaN(buttontext) || buttontext === ".") {
        display.textContent = buttontext;
      } else {
        display.textContent += buttontext;
      }
    } 
    
    // E. Baaki saari cheezon ke liye (Numbers/Operators add karte raho)
    else {
      display.textContent += buttontext;
    }
  });
});


