if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
            console.log('Service Worker registrato con successo:', registration);
        })
        .catch(function (error) {
            console.error('Errore durante la registrazione del Service Worker:', error);
        });
}

function visualizza() {
    document.getElementById('display').value = currentInput;
}

var currentInput = "0";
var operatore = "";
var primoValore = "";

visualizza();

function apprendinumero(number) {
    if (currentInput === "0" || currentInput === "-0") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    visualizza();
}

function clearDisplay() {
    currentInput = "0";
    visualizza();
}

function decimale(){
    if (!currentInput.includes('.')) {
        currentInput += '.';
        visualizza();
    }
}

function selezionaOperatore(op) {
    operatore = op;
    primoValore = currentInput;
    currentInput = '0';
}

function percentuale(){
    currentInput = (parseFloat(currentInput) / 100).toString();
    visualizza();
}

function negativo(){
    currentInput = (parseFloat(currentInput) * -1).toString();
    visualizza();
}

function calcola() {
    const secondoValore = currentInput;
    var risultato = 0;
    switch (operatore) {
        case '+':
            risultato = parseFloat(primoValore) + parseFloat(secondoValore);
            break;
        case '-':
            risultato = parseFloat(primoValore) - parseFloat(secondoValore);
            break;
        case '*':
            risultato = parseFloat(primoValore) * parseFloat(secondoValore);
            break;
        case '/':
            risultato = parseFloat(primoValore) / parseFloat(secondoValore);
            break;
        default:
            risultato = parseFloat(primoValore);
            break;
    }

    currentInput = risultato.toString();
    operatore = '';
    primoValore = '';
    visualizza();
}