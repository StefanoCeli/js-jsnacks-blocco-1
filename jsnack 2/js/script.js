//creo due variabili con dentro un prompt per chiedere l'inserimento di una parola all'utente
var parola1 = prompt('Inserisci la prima parola')
var parola2 = prompt('Inserisci la seconda parola')

//controllo quale parola delle due è più lunga tramite una condizione
if(parola1.lenght < parola2.lenght){
    console.log("parola1 :" + parola1)
    console.log("parola2 :" + parola2)
}else if( parola1.lenght > parola2.lenght){
    console.log("parola2 :" + parola2)
    console.log("parola1 :" + parola1)
}else{
    console.log("parola1 :" + parola1)
    console.log("parola2 :" + parola2)
    console.log("sono lunghe uguali")
}