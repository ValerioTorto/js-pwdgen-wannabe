// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favcolor = prompt("Inserisci il tuo colore preferito");

// Compliazione del biglietto
let passgenerator = `
-------------- Il tuo generatore di password --------------
> Informazioni sull'utente:
Nome, Cognome e colore preferito: ${name + surname + favcolor + 21}
-----------------------------------------------------------
`;

console.log(passgenerator);
