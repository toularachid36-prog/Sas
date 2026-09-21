let prompt = require('prompt-sync')();
function calculerAgeChien(ageHumain){
 return ageHumain * 7;
}
let ageChien= +prompt("Entrez l'age :")
console.log(calculerAgeChien(ageChien));