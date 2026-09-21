let prompt = require('prompt-sync')();
function convertirMontant(montant, taux, formatter) {
  let resultat = montant * taux;

  return formatter(resultat);
}

const formatMAD = (val) => val + " DH";
let montant = +prompt("Entrze la Montant :");
console.log(convertirMontant(montant, 10.5, formatMAD));