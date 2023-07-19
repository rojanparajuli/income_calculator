function calculateSavings() {
    const currentSavings = parseFloat(document.getElementById("currentSavings").value);
    const monthlyContributions = parseFloat(document.getElementById("monthlyContributions").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const goalAmount = parseFloat(document.getElementById("goalAmount").value);
  
    if (isNaN(currentSavings) || isNaN(monthlyContributions) || isNaN(interestRate) || isNaN(goalAmount)) {
      document.getElementById("result").textContent = "Please enter valid numbers.";
      return;
    }
  
    let months = 0;
    let currentAmount = currentSavings;
  
    while (currentAmount < goalAmount) {
      const monthlyInterest = (currentAmount + monthlyContributions) * (interestRate / 100) / 12;
      currentAmount += monthlyContributions + monthlyInterest;
      months++;
  
      if (months > 1200) { // Limit to prevent infinite loop (maximum 100 years)
        document.getElementById("result").textContent = "It may not be possible to reach the goal with the given parameters.";
        return;
      }
    }
  
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const resultText = `To reach your goal of Rs${goalAmount.toFixed(2)}, you need to save for approximately `;
    
    if (years > 0) {
      document.getElementById("result").textContent = resultText + `${years} years and ${remainingMonths} months.`;
    } else {
      document.getElementById("result").textContent = resultText + `${remainingMonths} months.`;
    }
  }
  