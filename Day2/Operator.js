/* Arithmetic Operations:- */
//1. Write a program to add two numbers and log the result to the console.
let num1 = 20;
let num2 = 40;
let res1 = num1+num2;
console.log(res1);

//2. Write a program to subtract two numbers and log the result to the console
let num3 = 60;
let num4 = 40;
let res2 = num3-num4;
console.log(res2);


//3. Write a program to multiply two numbers and log the result to the console
let num5 = 20;
let num6 = 40;
let res3 = num5*num6;
console.log(res3);

//4. Write a program to divide two numbers and log the result to the console.
let num7 = 100;
let num8 = 20;
let res4 = num7/num8;
console.log(res4);

//5. Write a program to find the remainder when one number is divided by another and log the result to the console
let num9 = 5;
let num10 = 3;
let res5 = num9 % num10;
console.log(res5);

/* Assignment Operator */
//6. Use the += operator to add a number to a variable and log the result to the console.
let n1 = 6;
n1 += 2; // n1 = n1+2
console.log(n1);

//7. Use the -= operator to subtract a number from a variable and log the result to the console.
let n2 = 7;
n2 -= 3;
console.log(n2);

/* Comparison Operators */
//8. Write a program to compare two numbers using > and < and log the result to the console.
let n3 = 8;
let n4 = 9;
console.log(n3>n4); //false
console.log(n3<n4); // true

//9. Write a program to compare two numbers using >= and <= and log the result to the console
let n5 = 23;
let n6 = 10;
console.log(n5>=n6); //true
console.log(n5<=n6); // false

//10. Write a program to compare two numbers using == and === and log the result to the console
let n7 = 60;
let n8 = "60";
console.log(n7==n8); //true
console.log(n7===n8); //false

/* Logical Operators: */
//11. Write a program that uses the && operator to combine two conditions and log the result to the console
console.log(2<5 && 4>2);

//12. Write a program that uses the || operator to combine two conditions and log the results to console
console.log(4<5 || 5<2);

//13. Write a program that uses ! operator to negate a condition and log the result to console
console.log(!(4>5));

/* Ternary Operator: */
//14. Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number2 = "0";
(number2!==0)?(number2>0? console.log("Positive number") : console.log("Negative number")):(console.log("Neither Positive nor negative"));