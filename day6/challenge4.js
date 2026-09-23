let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2}
let penalty = employee.absenceDays * 200;
let salaireFinal = employee.salary + employee.bonus - penalty;
console.log("First Name :" + employee.firstName);
console.log("Last Name :" + employee.lastName);
console.log("Salaire :" + employee.salary + "DH");
console.log("Bonus :" + employee.bonus + "DH");
console.log("Penalites :" + penalty + "DH");
console.log("Salaire Final :" + salaireFinal);