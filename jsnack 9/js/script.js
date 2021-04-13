//creo una variabile numero che sarà uguale a 1 (in modo) somma che sarà 0 e un ciclo per calcolare la somma dei primi 10 numeri

var somma=0;

for(var i=1; i<=10; i++){

    somma+= i;
    console.log(somma)
  
}
//creo una variabile "media_numeri" per restituire la media della somma ricevuta

var media_numeri=somma / (i -1); 
console.log("questa è la somma dei primi 10 numeri: " + somma + " mentre la media è : " + media_numeri);
