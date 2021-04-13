//chiedo all'utente un numero tramite un prompt
var num_utente= parseInt(prompt('inserisci un numero'));

//creo un ciclo dove prendo il valore dall'utente  e lo vado a decrementare tramite un ciclo elevandolo al cubo
var somma = 0;

while(num_utente >= 1){
    var potenza= Math.pow(num_utente,3);
    somma+=potenza;
    console.log(potenza);
    num_utente--;
    console.log(somma);
    console.log("-----------")
}
console.log(somma);

/* var somma = 0;
var i=1
while(i <= num_utente){
    var potenza= Math.pow(i,3);
    somma+=potenza;
    console.log(potenza);
    console.log(somma);
    i++;
}
console.log(somma);
 */
