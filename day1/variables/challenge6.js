let prompt = require('prompt-sync')();
let partie1 = prompt("Score partie 1 :");
let partie2 = prompt("Score partie 2 :");
let partie3 = prompt("Score partie 3 :");
let partie4 = prompt("Score partie 4 :");

let total = partie1 *1 + partie2*1 + partie3*1+ partie4*1;
let moyenne = total / 4;

console.log("Score total :", total);
console.log("Moyenne :", moyenne);
