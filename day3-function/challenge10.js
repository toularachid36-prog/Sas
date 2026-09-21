let prompt = require('prompt-sync')();
function nettoyerEspaces(texte){
    return texte.trim();
}
function mettreEnMajuscule(texte){
    return texte.toUpperCase();
}
function ajouterPrefixe(texte, prefixe = "LOG:"){
    return prefixe+ " " + texte;
}
function traiterMessage(texte, ...transformations) {
    return 
}