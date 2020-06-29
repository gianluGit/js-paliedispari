// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Dammi una parola");
console.log(parola.length);

var parolaInversa = invertiParola(parola);
console.log(parolaInversa);






if (parolaInversa == parola) {
  console.log("Questa parola è palindroma");
} else {
  console.log("Questa parola NON è palindroma");
}

function invertiParola(parola) {
  var parolaInversa = "";

  for (var i = parola.length - 1; i >= 0; i--) {
    parolaInversa += parola[i];
  }
  return parolaInversa;
}
