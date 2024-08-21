/**Even or odd function script: Write a script that includes a function to check if a number is even or odd and logs the result */
let isEven = function(num){
  if(num % 2 === 0)
  {
    return `${num} is an even number`;
    
  }
  else{
    return `${num} is an odd number`;
  }
}
console.log(isEven(6));
/**Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result */
let n = 8;
let square = function(num){
   return num*num;
}
console.log(`Square of ${n} is ${square(n)}`);
/**Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result */
let str1 = "Hello";
let str2 = "World"
let concatenateStrings = function(s1, s2){
  return s1+s2;
}
console.log(concatenateStrings(str1, str2));
/**Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result */
let num2 = 6;
let num3 = 9;
let sumOfTwoNumbers = (n1, n2) => {
  return n1+n2;
}
console.log(`Sum of ${num2} and ${num3} is ${sumOfTwoNumbers(num2, num3)}`);

/**Higher-Order Function Script: Write a script that includes a higher order function to apply a given function multiple times */
