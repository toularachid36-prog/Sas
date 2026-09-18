let prompt = require('prompt-sync')();
let n = + prompt("Donnez N :");
for (let i = 2; i <= n; i += 2) {
    console.log(i);
}