// CONSEGNA 

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// SOLUZIONE


// Chiedo all'utente il numero di chilometri che vuole percorrere
const numKm = parseInt(prompt(`Quanti chilometri vuole percorrere?`));
console.log(numKm);

// Chiedo all'utente l'età del passeggero
 const userAge = parseInt(prompt(`Qual è l'età del passeggero?`));
 console.log(numKm);

// Definisco il prezzo del biglietto
let travelPrice = numKm * 0.21;

// Applico eventuali sconti
if(userAge < 18){
    travelPrice = travelPrice - (travelPrice / 100 * 20);
} else if(userAge >= 65){
    travelPrice = travelPrice - (travelPrice / 100 * 40);
}
console.log(travelPrice);

// Output con massimo 2 cifre decimali
document.getElementById('ticket-price').innerHTML = travelPrice.toFixed(2);
console.log(travelPrice.toFixed(2));
