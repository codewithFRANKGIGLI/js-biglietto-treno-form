// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// ACQUISIZIONE DATI
// chiedere quanti km si vuole percorrere
const userDistance = parseInt(prompt('Quanti km devi percorrere?'));
console.log('Distanza da percorrere: ' + userDistance + ' km');
// chiedere quanti anni ha il passeggero
const userAge = parseInt(prompt('Quanti anni ha il passeggero?'));
console.log('L\'età del passeggero è: ' + userAge + ' anni');

// LOGICA
// calcolare il prezzo tot del viaggio in base ai km e all'età
// prima calcolo il totale senza sconto:
const fullPrice = userDistance * 0.21;
console.log('Il prezzo intero è di: ' + fullPrice + ' €');
// ora calcolo il prezzo e se c'è lo sconto:
let finalPrice;
if (userAge > 65) {
    finalPrice = (fullPrice * 0.6).toFixed(2);
} else if (userAge < 18) {
    finalPrice = (fullPrice * 0.8).toFixed(2);
} else {
    finalPrice = fullPrice.toFixed(2);
}
console.log(finalPrice);
// OUTPUT
// prezzo in €!!!
alert('Ti costerà: ' + finalPrice + ' € ' + 'per percorrere: ' + userDistance + ' km!!! Buon viaggio, spendaccione!');