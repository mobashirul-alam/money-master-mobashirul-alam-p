
// -----------------------Getting Input Value Function----------------------
function getInputValue(inputId) {
    const inputString = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputString);
    if (inputValue < 0) {
        alert('Invalid Input Given');
        document.getElementById(inputId).value = '';
    } else if (isNaN(inputValue)) {
        alert('Input Type Invalid');
        document.getElementById(inputId).value = '';
    }
    else {
        return inputValue;
    }
}

// ---------------------Calculate button event handler----------------------

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = getInputValue('income-input');

    const totalExpenses = getInputValue('food-input') + getInputValue('rent-input') + getInputValue('clothes-input');

    if (totalExpenses > incomeInput) {
        alert('You can not spend more than you have.');
        document.getElementById('total-expense-value').innerText = "Spend Carefully";
    } else {
        // Set total expense value 
        document.getElementById('total-expense-value').innerText = totalExpenses;

        // Set current balance 
        const balance = parseFloat(incomeInput) - totalExpenses;
        let currentBalance = document.getElementById('balance-current').innerText = balance;
    }
})

// ------------------------Save button event handler------------------------

document.getElementById('save-button').addEventListener('click', function () {
    // Saving Amount calculate.
    const saveInput = getInputValue('save-input');
    const savingAmount = getInputValue('income-input') / 100 * saveInput;

    let currentBalance = parseFloat(document.getElementById('balance-current').innerText);

    if (savingAmount < 0) {
        alert('Invalid Input Given');
        document.getElementById('save-input').value = "";
    }
    else if (savingAmount > currentBalance) {
        alert("Can't save more than current balance.");
        document.getElementById('saving-amount').innerText = "Fullfill your need first";
        document.getElementById('save-input').value = "";
    }
    else {
        // Remaining Balance calculate and Set
        const balanceRemaining = currentBalance - savingAmount;
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('balance-remaining').innerText = balanceRemaining;
    }

})