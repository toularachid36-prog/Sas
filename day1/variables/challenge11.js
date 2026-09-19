let prompt = require('prompt-sync')();
let Longueur = prompt("saiser la longueur de la pièce:");
let Largeur = prompt("saiser la largeur de la pièce:");
let surface = Longueur * Largeur;
let Périmètre = 2 * (Longueur + Largeur);
console.log("La Surface:", surface, "m²");
console.log("Périmètre:", Périmètre, "m");