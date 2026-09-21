let prompt = require('prompt-sync')();
function compterCaracteres(chaine){
    let compteur = 0;
    while (chaine[compteur]){
        compteur++;
    }
    return compteur;
}
let texte = prompt("Entrez votre Texte :");
console.log(compterCaracteres(texte));