let prompt = require('prompt-sync')();
function repeterChaine(chaine, fois) {
    let resultat = "";
    for(let i=0; i < fois; i++){
        resultat = resultat + chaine;
    }
    return resultat;
}
let texte = prompt("Entrez Votre Texte :");
let nombre = +prompt("Entrez Nombre De Fois :");
console.log(repeterChaine(texte, nombre));
