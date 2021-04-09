//creo una variabile con un valore di 0 (per identificare la variabile come un numero) e un ciclo cha parta da 0 a 9 e dentro ci inserisco un prompt dove chiede di inserire un numero dall'utente
var somma=0;

for ( var i=0; i<10; i++){
    var num_utente=parseInt(prompt('Inserisci un numero'));
    somma += num_utente;  
}
console.log(somma)