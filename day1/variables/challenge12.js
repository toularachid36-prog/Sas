let prompt = require('prompt-sync')();
let code = prompt("saiser un code de 4 chiffres:");
let premier = (code - (code % 1000)) / 1000;
let deuxieme = ((code % 1000) - (code % 100)) / 100;
let troisieme = ((code % 100) - (code % 10)) / 10;
let quatrieme = code % 10;

console.log("Premier chiffre :", premier);
console.log("Deuxième chiffre :", deuxieme);
console.log("Troisième chiffre :", troisieme);
console.log("Quatrième chiffre :", quatrieme);