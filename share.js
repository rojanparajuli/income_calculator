function calculateTotal() {
    const buyOrSell = document.getElementById('buyOrSell').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const cdscCharge = 25;
    const brokerChargePercentage = 0.75;
    const sebonChargePercentage = 0.00015;
    const profitPercentage = 2.10;

    let totalAmount = 0;
    let deductionPercentage = 0;

    const brokerCharge = (quantity * price * brokerChargePercentage) / 100;
    const sebonCharge = (quantity * price * sebonChargePercentage) / 100;
    const totalCharges = cdscCharge + brokerCharge + sebonCharge;

    if (buyOrSell === 'buy') {
        const deductedAmount = quantity * price + cdscCharge;
        const totalChargesPercentage = ((totalCharges / deductedAmount) * 100).toFixed(2);
        deductionPercentage = parseFloat(totalChargesPercentage);
        totalAmount = deductedAmount;
    } else if (buyOrSell === 'sell') {
        const netAmount = quantity * price - totalCharges;
        const profit = (netAmount * profitPercentage) / 100;
        totalAmount = netAmount + profit;

        const totalChargesPercentage = ((totalCharges / (quantity * price)) * 100).toFixed(2);
        deductionPercentage = parseFloat(totalChargesPercentage) + profitPercentage;
    }

    displayResult(totalAmount, deductionPercentage);
}

function displayResult(totalAmount, deductionPercentage) {
    const resultDiv = document.getElementById('result');
    let deductedAmount = totalAmount; // Initialize deductedAmount to totalAmount

    if (deductionPercentage !== 0) {
        // If deductionPercentage is not 0 (selling shares), calculate deductedAmount
        deductedAmount = totalAmount - (totalAmount * deductionPercentage) / 100;
    }

    resultDiv.innerHTML = `
        <p>Total Amount: NPR ${totalAmount.toFixed(2)}</p>
        <p>Deducted Amount: NPR ${deductedAmount.toFixed(2)}</p>
        <p>Deduction Percentage: ${deductionPercentage.toFixed(2)}%</p>
    `;
}
