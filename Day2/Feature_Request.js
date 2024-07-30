/* Arithmetic Operations Script: Write a script that performs basic arithmetic
operations(addition, subtraction, multiplication, division, remainder) on 
two numbers and log the results.
*/
let num1 = 5;
let num2 = 2;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
/*
Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
*/
let num3 = 10;
let num4 = 15;
console.log(num3>num4);
console.log(num3<num4);
console.log(num3<=num4)
console.log(num3>=num4);
console.log(num3==num4);
console.log(num3===num4);
console.log(num3!=num4);
console.log(num3!==num4);
console.log(2<3 && 2<5);
console.log(10>15 || 10<20);
console.log(!(10<15));
 
  /*
   Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
  */

   let num5 = -9;
   (num5!==0)?(num5>0 ? console.log("Positive number"): console.log("Negative number")):(console.log("Number is neither negative nor positive"));