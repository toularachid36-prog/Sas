let prompt = require('prompt-sync')();
let account ={
             owner: prompt("Entrez Votre Nom :"),
             balance:+prompt("Entrez Votre Balance :"),
             type:prompt("Entrez Votre Type :")}
function showSolde(){
    console.log("Solde " + account.balance);}
function deposit(montant){
    if(montant>0){
        account.balance += montant
    console.log("Deposit Effectue");}
    else {
    console.log("Deposit Invalide");}}
function withdraw(montant){
    if(montant>0 && montant<=account.balance){
        account.balance -= montant
    console.log("Withdraw Effectue");}
    else {
    console.log("Withdraw Invalide");}}
function checkBalance(montant){
    if(montant>account.balance)
    return account.balance >= montant;}
function afficher(){
    console.log("Owner :" + account.owner);
    console.log("Balance :" + account.balance);
    console.log("Type :" + account.type);
}
showSolde();
let depos = +prompt("Entrez Le Montant A deposir :");
    deposit(depos);
let withd = +prompt("Entrez Le Montant A Withdraw :");
    withdraw(withd);
let montant = +prompt("Entrez Le Montant A Verifier :");
afficher();