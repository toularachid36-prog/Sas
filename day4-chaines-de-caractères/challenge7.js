let prompt = require('prompt-sync')();
function remplacerCaractere(chaine, ancien, nouveau) {
    let resultat = "";
  for(let i =0; i<chaine.length; i++) {
    if (chaine[i] === ancien){
        resultat = resultat + nouveau;
    }
    else {
        resultat = resultat + chaine[i];
    }
  }  
    return resultat;
}
let texte = prompt("Entrez Le Texte :");
let ancien = prompt("Entrez le caracter que tu veux remplacer :");
let nouveau = prompt("Entrez le nouveau caracter :");
console.log(remplacerCaractere(texte, ancien, nouveau));