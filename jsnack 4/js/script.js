//creo un array di nomi che sono i partecipanti alla festa

var invitati_array=['lorenzo','fabio','valerio','pino','luca','giacomo'];

//creo una variabile per chiedere il nome all'utente

var nome=prompt('Inserisci il tuo nome e verifica se sei in lista ');

//creo una variabile con inizio false e poi un ciclo per verificare se il nome inserito dall'utente corrisponde a quello presente nell'array,se positivo tramite una condizione comparirà un alert (puoi entrare),se negativo comparirà un alert(non sei stato invitato)

var invitato__trovato=false;

for(var i=0; i<invitati_array.length; i++){
    var invitato= invitati_array[i];
    
    if(nome===invitato){
         invitato__trovato=true;
         console.log(invitato__trovato);

    }
}
if(invitato__trovato){
    alert("Puoi entrare!")
}else{
    alert('Non sei stato invitato!');
}

//se non volessi usare la flag (true/false) posso usare questo metodo ma è meno consigliato

/* for(var i=0; i<invitati_array.length; i++){
    var invitato= invitati_array[i];
    
    if(nome===invitato){
         console.log("puoi entrare");
         break;

    }
}
if(nome===invitati_array[i]){
    alert("Puoi entrare!")
}else{
    alert('Non sei stato invitato!');
}
 */