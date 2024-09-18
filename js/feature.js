document.getElementById('add-money-button').addEventListener('click', function () {
    document.getElementById('cash-out-action').classList.add('hidden');
    document.getElementById('add-money-action').classList.remove('hidden');
    
})

document.getElementById('cash-out-button').addEventListener('click', function () {
    document.getElementById('cash-out-action').classList.remove('hidden');
    document.getElementById('add-money-action').classList.add('hidden');
})