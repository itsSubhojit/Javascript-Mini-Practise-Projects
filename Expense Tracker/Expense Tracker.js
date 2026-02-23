let updatebalance = document.querySelector(".balance");
let inpBox = document.querySelector("#inpbox");
let incomeBtn = document.querySelector("#income");
let expenseBtn = document.querySelector("#expense");

let balance = 0;

function updateUi(){
    updatebalance.textContent = balance;
}

incomeBtn.addEventListener("click", function(){

    const inp = inpBox.value.trim();
    const num = Number(inp);

    if (!inp || isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }

    balance = balance + num;

    inpBox.value = "";
    updateUi();
});

expenseBtn.addEventListener("click", function(){

    const inp = inpBox.value.trim();
    const num = Number(inp);

    if (!inp || isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }

    balance = balance - num;

    inpBox.value = "";
    updateUi();
});