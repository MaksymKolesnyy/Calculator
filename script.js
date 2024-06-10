
// Funzione per inserire il valore nel campo di input
function insertValue(value) {
    const inputField = document.getElementById('screen');
    inputField.value += value;
}

// Funzione per cancellare il contenuto del campo di input
function clearInput() {
    const inputField = document.getElementById('screen');
    inputField.value = '';
}

// Funzione per calcolare il risultato e aggiornare l'input
function calculateResult() {
    const inputField = document.getElementById('screen');
    try {
        inputField.value = eval(inputField.value.replace(/,/g, '.')).toString().replace(/\./g, ',');
    } catch (error) {
        inputField.value = 'Error';
    }
}