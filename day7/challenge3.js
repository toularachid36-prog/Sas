let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];
function recherheBinaire(tableu, valeur) {
    let debut = 0;
    let fin = tableu.length - 1;
    while (debut <= fin) {
        let milieu = parseInt((debut + fin) / 2);
        if (tableu[milieu] === valeur) {
            return milieu;
        }
        if (tableu[milieu] < valeur) {
            debut = milieu + 1;
        }
        else {
            fin = milieu - 1;
        }
    }
    return -1;
}
console.log(recherheBinaire(ids, 70)); 