let prompt = require('prompt-sync')();
function estPalindrome(chaine) 
{
   let debut = 0;
   let fin = chaine.length -  1;
   while(debut < fin)
   {
    if (chaine[debut] !== chaine[fin])
    {
        return false;
    }
    debut++;
    fin--;
   } 
  return true;
}
let texte = prompt("Entrez votre Texte :");
console.log(estPalindrome(texte));