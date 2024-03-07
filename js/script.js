// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno-form
// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const buttonGenera = document.getElementById('genera');
console.log(buttonGenera);
buttonGenera.addEventListener('click', function() {
    
    const inputEta = document.getElementById("fascia-eta");
    const eta = inputEta.value;
    console.log(eta);

    const inputNome = document.getElementById("nome-utente");
    const nomeUtente = inputNome.value;
    console.log(nomeUtente);

    const inputKm = document.getElementById("km");
    const percorrenza = parseInt(inputKm.value);
    console.log(percorrenza);

    let offerta = "Tariffa Standard"; 

    const prezzoAlKilometro = 0.21;
    let prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
    console.log(prezzoBigliettoSenzaSconto);

    if (eta === "minorenne") {
        prezzoBigliettoSenzaSconto *= 0.8; // Applica 20% di sconto
        offerta = "Sconto Minorenne";
    } else if (eta === "over65") {
        prezzoBigliettoSenzaSconto *= 0.6; // Applica 40% di sconto
        offerta = "Sconto Over 65";
    } 

    const carrozza = Math.floor(Math.random() * 9) + 1;
    const cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000;

    document.getElementById('nome-passegero').innerHTML = nomeUtente;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('costo-biglietto').innerHTML = prezzoBigliettoSenzaSconto.toFixed(2);
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = cp;

    const bigliettoDiv = document.getElementById('biglietto');
    bigliettoDiv.classList.remove('hidden');
    bigliettoDiv.classList.add('show');

});

const buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener( 'click',
  function() {
    document.getElementById('nome-passegero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('costo-biglietto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';


    document.getElementById('km').value = '';
    document.getElementById("fascia-eta").value = '';
    document.getElementById("nome-utente").value = '';
    
    const bigliettoDiv = document.getElementById('biglietto')
    bigliettoDiv.classList.remove('show');
    bigliettoDiv.classList.add('hidden');
  }
);