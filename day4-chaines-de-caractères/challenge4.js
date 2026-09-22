let prompt = require('prompt-sync')();
let compteur = 0
function compterVoyelles(chaine){
    for (let i = 0; i<=chaine.length; i++){
        if (chaine[i] === "a" ||
            chaine[i] === "o" ||
            chaine[i] === "u" ||
            chaine[i] === "e" ||
            chaine[i] === "i" ||
            chaine[i] === "y" ||
            chaine[i] === "A" ||
            chaine[i] === "O" ||
            chaine[i] === "U" ||
            chaine[i] === "E" ||
            chaine[i] === "I" ||
            chaine[i] === "Y")
            { compteur++;}
    }
    return compteur;
}
let texte = prompt("Entrez Le Texte :");
console.log(compterVoyelles(texte));