let prompt = require('prompt-sync')();
function verifierMotDePasse(motDePasse){
   if (motDePasse.length >= 8 && motDePasse.includes("@")){
    return true;
   }
   else {
    return false;
  }
}
let motDePasse = prompt("Entrez Votre Mot De Passe :");
console.log(verifierMotDePasse(motDePasse));