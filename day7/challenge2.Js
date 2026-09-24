let notes = [12, 5, 19, 3, 27, 8, 14];
for (let i = 0; i <= notes.length; i++) {
    for (let j = 0; j < notes.length-1; j++) {
        if (notes[j] > notes[j + 1]) {
            let first = notes[j];
            notes[j] = notes[j + 1];
            notes[j + 1] = first;
        }
    }
}
console.log(notes);