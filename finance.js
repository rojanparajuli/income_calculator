let transactions = [];

function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description.trim() === '' || isNaN(amount)) {
        alert('Please enter valid transaction details.');
        return;
    }

    transactions.push({ description, amount });
    updateTransactionsList();
    updateTotalAmount();
    clearInputs();
}

function updateTransactionsList() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${transaction.description}</span>
            <span>${formatCurrency(transaction.amount)}</span>
        `;
        transactionList.appendChild(listItem);
    });
}

function updateTotalAmount() {
    const totalAmount = document.getElementById('totalAmount');
    const total = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    totalAmount.textContent = `Total: ${formatCurrency(total)}`;
}

function formatCurrency(amount) {
    return `Rs.${amount.toFixed(2)}`;
}

function clearInputs() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

// To-Do: You can implement additional features like deleting transactions or setting a budget.
