let prompt = require('prompt-sync')();
function genererEmail(prenom, nom) {
  return prenom.toLowerCase() + "." + nom.toLowerCase() + "@entreprise.com";
}
let prenom = prompt("Entrez votre prenom :");
let nom = prompt("Entrez votre nom : ");

console.log(genererEmail(prenom, nom));
