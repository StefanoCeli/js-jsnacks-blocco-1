//creo un prompt dove vado a chiedere all'utente di inserire un numero da quattro cifre
var num_utente= prompt('Inserisci un numero di quattro cifre');

//creo tre variabili che userò per il ciclo,la variabile start ed end le userò incrementandole tramite il ciclo e inserendole come valore nello slice, invece la variabile somma andra a sommare il risultato di ongi ciclo più se stessa

var start=0;
var end=1;
var somma=0;

//inizio il ciclo e all'interno creo due variabili,la variabile frammento per dividere i numeri dati dall'utente,mentre la variabile numero per rendere di nuovo un numero il risultato dello slice

while(end<=4){
    var frammento=num_utente.slice(start,end);
    var numero=parseInt(frammento)
    somma+=numero;
    console.log(somma);
    start++;
    end++;
}
console.log('la somma è di: ' + somma);


//qui creo una soluzione alternativa,dove rendo la variabile num_utente una stringa per poter ricavare la sua lunghezza,dopo la vado a usare nel ciclo while come punto di arrivo,cosi facendo qualsiasi cifrà andrà a inserire l'utente, farà la somma dei numeri in base alla sua lunghezza.

/* var lunghezza=('' + num_utente).length;

while(end<=lunghezza){
    var frammento=num_utente.slice(start,end);
    var numero=parseInt(frammento)
    somma+=numero;
    console.log(somma);
    start++;
    end++;
}
console.log('il numero è lungo ' +lunghezza + ' caratteri e la somma è di: ' + somma);
 */