let prompt = require('prompt-sync')();
function extraireChaine(chaine, debut, fin){
    let resultat = "";
  for(let i=debut; i<fin; i++){
    resultat = resultat + chaine[i];
  }
    return resultat;
}
let texte = prompt("Entrez Votre Texte :");
let debut = +prompt("Entrez le debut :");
let fin = +prompt("Entrez la fin :");
console.log(extraireChaine(texte, debut, fin));