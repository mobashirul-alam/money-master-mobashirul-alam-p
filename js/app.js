
function getInputValue(inputId) {
    const inputString = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputString);
    if (inputValue < 0) {
        alert('Invalid Input Given');
        document.getElementById(inputId).value = '';
    } else if (typeof (inputString) != 'number') {
        alert('Invalid Input Type');
        document.getElementById(inputId).value = '';
    }
    else {
        return inputValue;
    }

}
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
        const currentBalance = parseFloat(incomeInput) - totalExpenses;
        document.getElementById('balance-current').innerText = currentBalance;
    }




})