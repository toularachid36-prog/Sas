let prompt = require('prompt-sync')();
function creerCompteur(valeurInitiale=0){
   let compteur = valeurInitiale;
   return function(){
    compteur++;
    return compteur;
   };
}
let i = +prompt("Entrez La Valeur i :")
const MonCompteur = creerCompteur(i);
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());