let prompt = require('prompt-sync')();
let gb = prompt("Entrez le stockage en GB :");
let mb = gb * 1024;

console.log("Stockage :", gb, "GB");
console.log("Résultat :", mb, "MB");