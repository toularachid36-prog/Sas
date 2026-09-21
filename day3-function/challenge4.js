let prompt = require('prompt-sync')();
function saluerClient(nom, titre= "Client") {
    console.log("Bonjour " + titre + " " + nom);

}
let nom = prompt("Entrez votre Nom :");
let titre = prompt("Entrez votre Titre :");
saluerClient(nom, titre, );