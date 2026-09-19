let prompt = require('prompt-sync')();
let numéro = + prompt("saiser votre Numéro");
switch (numéro){
    case 1: {
        console.log("Jour : lundi");
        break; }
    case 2: {
        console.log("Jour : Mardi");
        break; }
    case 3: {
        console.log("Jour : Mercredi");
        break; }
    case 4: {
        console.log("Jour : Jeudi");
        break;}
    case 5: {
        console.log("Jour : Vendredi");
        break;}
    case 6: {
        console.log("Jour : Samedi");
        break;}
    case 7: {
        console.log("Jour : Dimanche");
        break;}
    default :{
        console.log("Numéro invalide");
    }
}