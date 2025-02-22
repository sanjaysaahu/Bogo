function updateTotal(amount) {
    document.getElementById('total').innerText = 'Total: $' + amount.toFixed(2) + ' USD';
}

function selectBox(boxId, optionsId) {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.remove('highlight'));
    
    const selectedBox = document.getElementById(boxId);
    selectedBox.classList.add('highlight');
    
    toggleDropdown(optionsId);
}

function toggleDropdown(id) {
    const allDropdowns = document.querySelectorAll('.box div[id$="Options"]');
    allDropdowns.forEach(dropdown => {
        if (dropdown.id !== id) {
            dropdown.classList.add('hidden');
        }
    });
    
    const options = document.getElementById(id);
    options.classList.toggle('hidden');
}