let prompt = require('prompt-sync')();
let Rayon = prompt("Le rayon du réservoir:");
let Hauteur = prompt("La hauteur du réservoir:");
const pi = 3.14159;
let volume = pi * Rayon * Rayon * Hauteur;
console.log("Volume :", volume, "m³");