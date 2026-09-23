let prompt = require('prompt-sync')();
let students = [{ id: 1, name: "Ali", age: 20 },
                { id: 2, name: "Sara", age: 22 },
                { id: 3, name: "Omar", age: 19 },
                { id: 4, name: "Imane", age: 21 }];
let id = +prompt("Entrez l'id de L'etudient ");
let trouve = false;
                for(let i=0; i<students.length; i++ ){
                if(students[i].id === id){
                console.log("Étudiant trouvé !")
                console.log("ID :" + students[i].id);
                console.log("Nom :" + students[i].name);
                console.log("Age :" + students[i].age); 
                trouve =  true;
                break;}
                }
                if (trouve === false) {
                console.log("Aucun étudiant trouvé avec cet ID.");}
       
