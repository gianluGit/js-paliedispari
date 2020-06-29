// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var scelta = prompt("pari o dispari?");
console.log(scelta);

var numUtente = parseInt(prompt("Dammi un numero da 1 a 5"));
console.log(numUtente);

var numCPU = getRandomIntInclusive(1, 5);
console.log(numCPU);

var somma = numUtente + numCPU;
console.log("la somma dei due numeri è " + somma);

var risultato = pariDispari(somma);
console.log(risultato);

if ((risultato == true) && (scelta == "pari")) {
  console.log("vince il giocatore");
} else if ((risultato == false) && (scelta == "dispari")) {
  console.log("Vince il giocatore");
} else {
  console.log("vince la CPU");
}


// funzione per verificare se la somma è pari o dispari
function pariDispari(num) {
  if (num%2 == 0) {
    return true;
  } else {
    return false;
  }
}

// funzione per generare un nume random da 1 a 5
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
