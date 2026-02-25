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
    savetolocalstorage({
        amount: num,
        purpose,
        type: "income",
    });
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
    savetolocalstorage({
        amount: num,
        purpose,
        type: "expense",
    });
});

function savetolocalstorage(obj){
    if(localStorage.getItem("money") === null){
        let walletBalance = [];
        walletBalance.push(obj);
        localStorage.setItem("money", JSON.stringify(walletBalance));
    }else{
        let walletBalance = localStorage.getItem("money");
        walletBalance = JSON.parse(walletBalance);
        walletBalance.push(obj);
        localStorage.setItem("money", JSON.stringify(walletBalance));
    }
}

let storedData = localStorage.getItem("money");

if(storedData){
    let transaction = JSON.parse(storedData);

transaction.forEach(function(item){
    const li = document.createElement("li");

    if(item.type === "income"){
        li.textContent = item.purpose + ":  +" + item.amount;
        li.style.color = "darkgreen";
        balance += item.amount ;
    }else{
        li.textContent = item.purpose + ": -" + item.amount;
        li.style.color = "red";
        balance -= item.amount;
    }

    transactionList.appendChild(li);
})
   updateUi();
}
