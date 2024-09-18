document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
   
    const inputNumber = document.getElementById('input-number').value;
    const inputPin = document.getElementById('input-pin').value;
    
    if (inputNumber === '5' && inputPin === '1234') {
        window.location.href='./Home.html'
    }
    else (
        alert('Invalid number or PIN')
    )

    
})