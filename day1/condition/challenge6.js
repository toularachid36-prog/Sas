let prompt = require('prompt-sync')();
let choix = + prompt("saiser votre choix");
switch (choix){
    case 1 :{
        console.log("Ouverture le profile...");
        break;}
    case 2 :{
        console.log("Ouverture des paramètres...");
        break;}
    case 3 :{
        console.log("Ouverture des notifications...");
        break;}   
    case 4 :{
        console.log("Se déconnecter...");
         break;}
    default:{
        console.log("Choix invalide");
         }
}
