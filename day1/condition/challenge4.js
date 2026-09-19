let prompt = require('prompt-sync')();
let montant = prompt("saiser votre montant");
if (montant>=500)
{
console.log("Livraison : gratuite");
console.log("Total à payer: " + montant + "DH");
}
else if (montant<500)
{
console.log("Livraison : 40 DH")
console.log("Total à payer : " + (montant*1+40)+ "DH")
}
