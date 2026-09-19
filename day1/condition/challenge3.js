let prompt = require('prompt-sync')();
let note = prompt("entrez votre note");
if (note>=10)
{console.log("Résultat : Admis");}
else if (note<10)
{console.log("Résultat : Non Admis");}
else  (0>note>20)
{console.log("note invalide");}
