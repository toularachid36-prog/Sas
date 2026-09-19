let prompt = require('prompt-sync')();
let noteCC = prompt("Note Contrôle continu");
let noteProject = prompt("Note project");
let notExamen = prompt("Note examen final");
let notefinal =(noteCC*2 + noteProject*3 + notExamen*5)/10;
console.log("note final:", notefinal );