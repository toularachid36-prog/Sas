let prompt = require('prompt-sync')();
let nombre1 = prompt("saiser nombre1 :");
let operateur = prompt("saiser un opérateur :");
let nombre2 = prompt("saiser nombre2 :");
switch (operateur){
    case"+":{
        console.log("Résultat :" + (nombre1*1 + nombre2*1));
        break;}
    case"-":{
        console.log("Résultat :" + (nombre1*1 - nombre2*1));
        break;}
    case"*":{
        console.log("Résultat :" + (nombre1 * nombre2));
        break;}
    case"/":{
        switch(nombre2){
            case"0":{
                console.log("Division par zéro impossible");
                break;}
            default:
                console.log("Résultat :" + (nombre1 / nombre2));
       break; }
    break;}
}