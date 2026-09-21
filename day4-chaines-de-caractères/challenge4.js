let prompt = require('prompt-sync')();
let compteur = 0
function compterVoyelles(chaine){
    for (let i = 0; i<=chaine.length; i++){
        if (chaine[i] === "a" ||
            chaine[i] === "o" ||
            chaine[i] === "u" ||
            chaine[i] === "e" ||
            chaine[i] === "y" )
            {
            compteur++;}

    }
    return compteur;
}
let chaine = prompt("Entrez Le Text :");
console.log(compterVoyelles(chaine));