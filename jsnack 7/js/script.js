//creo una variabile potenza che ha 1 come valore iniziale e la variabile limite con valore 1000

var potenza= 1;
var limite = 1000;
//creo un ciclo dove vado ad aumentare potenza al quadrato fino a un massimo di 1000

var i=1;
while(potenza<limite){
    console.log(potenza)
    console.log("-------")
    potenza=Math.pow(2,i);
    i++
}


/* for(i=1; potenza<limite; i++){
  
    potenza=Math.pow(2,i);
    console.log(potenza)
    console.log("-------")
    
} */