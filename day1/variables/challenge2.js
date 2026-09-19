let prompt = require('prompt-sync')();
let mad = prompt("Entrez votre budget en MAD :");
let eur = mad / 11;

console.log("Budget en MAD :", mad);
console.log("Budget en EUR :", eur);