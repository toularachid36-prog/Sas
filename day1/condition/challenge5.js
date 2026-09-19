let prompt = require('prompt-sync')();
let note = prompt("saiser votre note :");
if (note < 0 || note > 20) {
    console.log("Note invalide.");
} else if (note < 10) {
    console.log("Mention : Échec");
} else if (note < 12) {
    console.log("Mention : Passable");
} else if (note < 14) {
    console.log("Mention : Assez bien");
} else if (note < 16) {
    console.log("Mention : Bien");
} else if (note < 18) {
    console.log("Mention : Très bien");
} else {
    console.log("Mention : Excellent");
}
