let nombres = [4, 8, 15, 16, 23, 42];
function rechercheNumber (nombres, nombre)
{
    for(let i=0; i<=nombres.length; i++)
    {
        if (nombres[i] === nombre)
        {
            return true;
        }
    }
        return false;  
}
console.log(rechercheNumber(nombres,4));