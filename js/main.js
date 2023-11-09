// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favcolor = prompt("Inserisci il tuo colore preferito");
let firstnumber = prompt("Inserisci un numero");
let secnumber = prompt("Inserisci un altro numero");

// Converto le variabili numero in un NUMERO
firstnumber = parseInt(firstnumber);
secnumber = parseInt(secnumber)

// Elaborazione delle statistiche
let primodivsecondo = firstnumber / secnumber;

// Compliazione del biglietto
let passgenerator = `
-------------- Il tuo generatore di password --------------
> Informazioni sull'utente:
Nome, Cognome e colore preferito: ${name + surname + favcolor + primodivsecondo}
-----------------------------------------------------------
`;

console.log(passgenerator);
