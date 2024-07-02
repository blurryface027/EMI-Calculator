document.getElementById('calculateBtn').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseFloat(document.getElementById('loanTenure').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure) || loanAmount <= 0 || interestRate <= 0 || loanTenure <= 0) {
        document.getElementById('emiResult').innerText = 'Please enter valid inputs';
        return;
    }

    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTenure * 12;

    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    document.getElementById('emiResult').innerText = `Your EMI is: ${emi.toFixed(2)}`;
});
