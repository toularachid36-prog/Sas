let prompt = require('prompt-sync')();
let fruits = ["pomme", "banane", "cerise", "mangue", "kiwi"];
function rechercheFruits (tableu, fruit){
for(let i=0; i<fruits.length; i++){
    if(fruits[i]===fruit){
        return i;
    }
}
return "Le Fruit N'est Pas Existe";
}
let recherche = prompt("Entrez Le Nom De Fruit :");
console.log(rechercheFruits(fruits, recherche));