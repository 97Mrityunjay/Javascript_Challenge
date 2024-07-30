/*variable declaration*/
//1. Declare a variable using var, assign it a number and log the value to console
var x = 3;
console.log(x);
//2. Declare a variable using let, assign it a string, and log the value to console
let y = 6;
console.log(y);

/*Constant Declaration */
//3. Declare a variable using const, assign it a boolean value and log the value to the console
const z = 2<3;
console.log(z);

/* Data Types */
//4. Create variables of different data types(number,string,boolean,object,array) and log each variable's type using the typeof operator
let num = 20;
let str = "Mrityunjay";
let isLoggedIn = true;
let obj = {name:"Mrityunjay", rollNo: 20, course: "MCA"};
let arr = [2,3,5,6,7,8];
console.log(typeof num);
console.log(typeof str);
console.log(typeof isLoggedIn);
console.log(typeof obj);
console.log(typeof arr);

/* Reassigning Variables */
// 5. Declare a variable using let, assign it an initial value, reassign a new value, and log both values to console
let a = 3;
console.log(a);
a = "Ajay";
console.log(a);

/* Understanding const */
// 6. Try reassigning a variable declared with const and observe the error
const b = 20;
console.log(b);
b=30; // TypeError: Assignment to constant variable
console.log(b);
