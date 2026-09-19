let prompt = require('prompt-sync')();
let Tab = ["pomme", "banane", "fraise"];
let valeur = prompt("Recherche l'element : ");
let element = false;
for (let i = 0; i < Tab.length; i++) {
    if(Tab[i] === valeur)
        {element = true;}
  }
console.log(element);