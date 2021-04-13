//chiedo all'utente un numero tramite un prompt
var num_utente= parseInt(prompt('inserisci un numero'));


while(num_utente >= 1){
    var potenza= Math.pow(num_utente,3);
    console.log(potenza);
    num_utente--;
    
}
