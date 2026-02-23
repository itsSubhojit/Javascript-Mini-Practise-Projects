let updatebalance = document.querySelector(".balance");
let inpBox = document.querySelector("#inpbox");
let incomeBtn = document.querySelector("#income");
let purposeBox = document.querySelector("#purpose");
let expenseBtn = document.querySelector("#expense");
let transactionList = document.querySelector(".transaction-list");

let balance = 0;

function updateUi(){
    updatebalance.textContent = balance;
}

incomeBtn.addEventListener("click", function(){

    const inp = inpBox.value.trim();
    const purpose = purposeBox.value.trim();
    const num = Number(inp);

    if (!inp || isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }

    balance = balance + num;
    const li = document.createElement("li");
    li.textContent = `${purposeBox.value}`+":  +" +num;
    li.style.color = "darkgreen";
    transactionList.appendChild(li);

    inpBox.value = "";
    purposeBox.value = "";
    updateUi();
});

expenseBtn.addEventListener("click", function(){

    const inp = inpBox.value.trim();
    const purpose = purposeBox.value.trim();
    const num = Number(inp);

    if (!inp || isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }

    balance = balance - num;
    const li = document.createElement("li");
    li.textContent = `${purposeBox.value}`+ ":  -" +num;
    li.style.color = "red";
    transactionList.appendChild(li);

    inpBox.value = "";
    purposeBox.value = "";
    updateUi();
});

