//creo un array vuoto

var numeri_dispari=[]

//creo un ciclo dove vado a chiedere per sei volte il numero all'utente e all'interno inserisco una condizione dove il numero se sarà dispari verrà inserito nell'array

for(var i=0; i<6; i++){
    var num_utente=parseInt(prompt('Inserisci un numero'));

    if(num_utente % 2){
        numeri_dispari.push(num_utente)
    }
}
//output risultato
console.log(numeri_dispari)