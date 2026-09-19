let prompt = require('prompt-sync')();
let distance = prompt("Entrez la distance en km :");
let carburant = prompt("Entrez le carburant consommé en litres :");

let consommation = (carburant / distance) * 100;

console.log("Consommation :", consommation, "L/100 km");
