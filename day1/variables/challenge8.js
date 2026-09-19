let prompt = require('prompt-sync')();
let U= prompt("Tention U en volts:");
let I= prompt("Intensité I en ampères:");
let t= prompt("Temps en heures:");
let energie = U * I * t;
console.log("Énergie :", energie, "Wh");