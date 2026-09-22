let prompt = require('prompt-sync')();
function compterLettre(chaine, lettre) {
    let compteur = 0
    for (let i=0; chaine[i]; i++)  {
        if (chaine[i] === lettre){
            compteur++;
        }
      }
    return compteur;
}
let texte = prompt("Entrez Votre Texte :");
let lettre = prompt("Entrez Votre Lettre :");
console.log(compterLettre(texte, lettre));  