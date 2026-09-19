let Tab = [1, 2, 3, 4];

let NewTab = [];

for (let i = 0; i < Tab.length; i++) {
    NewTab[i] = Tab[Tab.length - 1 - i];
}

console.log(NewTab);