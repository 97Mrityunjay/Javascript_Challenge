//Feature Request
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to console

let x = 4;
let y = "Suraj";
let z = 4<10;
let a = [3,6,"7"];
let obj = {"name":"Mrityunjay", "rollNo":34};
console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(obj);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof a);
console.log(typeof obj);

/* Reassignment Demo: Create a script that demonstrates the difference in behaviour between let and const when it comes to reassignment */
let num = 8;
console.log(num);
num = 20;
console.log(num);
const name1 = "Mrityunjay";
console.log(name1);
name1 = "Ajay"; // TypeError: Assignment to constant variable
console.log(name1);

