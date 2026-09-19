let prompt = require('prompt-sync')();
let nombre = prompt("entrez votre nombre");
if (nombre>0)
{console.log("Le nombre est positif");}
else if (nombre<0)
{console.log("Le nombre est négatif.");}
else if (nombre==0)
{console.log("le nombre est égal à zéro.");}
else 
{console.log(" invalide");}