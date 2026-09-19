let prompt = require('prompt-sync')();
let duree= prompt("saiser le duree du film");
if (duree<60)
 {console.log("court metrage");}
else if (duree<=120)
{console.log("film standard");}
else (duree>120)
{console.log("film long");}