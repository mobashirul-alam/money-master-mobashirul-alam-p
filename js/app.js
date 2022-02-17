

document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothesInput = document.getElementById('clothes-input').value;
    const incomeInput = document.getElementById('income-input').value;

    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);

    // Set total expense value 
    document.getElementById('total-expense-value').innerText = totalExpenses;

    // Set current balance 
    const currentBalance = parseFloat(incomeInput) - totalExpenses;
    document.getElementById('balance-current').innerText = currentBalance;
    console.log(totalExpenses);

})