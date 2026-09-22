let prompt = require('prompt-sync')();
function inverserChaine(chaine) {
  let resultat = "";

  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat = resultat + chaine[i];
  }

  return resultat;
}

let phrase = prompt("Entrez une Phrase :");

console.log(inverserChaine(phrase));