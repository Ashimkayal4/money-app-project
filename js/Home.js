document.getElementById('home-login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const homePassword = document.getElementById('home-password').value;
    const homeAmount = document.getElementById('home-amount').value;
    const currentMoney = document.getElementById('current-money').innerText;

    if (homePassword === '1234') {
        const amountNumber = parseFloat(homeAmount);
        const currentMoneyNumber = parseFloat(currentMoney);
        const total = amountNumber + currentMoneyNumber;
        document.getElementById('current-money').innerText = total;
       
    }
    else {
        alert('Invalid PIN')
    }

})

document.getElementById('home-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById('home-input-amount').value;
    const inputAmountFinal = parseFloat(inputAmount);
    const inputPassword = document.getElementById('home-input-password').value;
    
    if (inputPassword === '1234') {
        const currentMoney = document.getElementById('current-money').innerText;
        const currentMoneyNumber = parseFloat(currentMoney);
        const afterCashOut = currentMoneyNumber - inputAmountFinal;
        document.getElementById('current-money').innerText = afterCashOut;
        
    }

})