let prompt = require('prompt-sync')();
let Tab = [1, 2, 3];
let Newelement = prompt("saiser votre new element :");
Tab[Tab.length] = Newelement;
console.log(Tab);