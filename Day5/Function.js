/*1. Function Declaration: */
//Task-1: Write a function to check if a number is even or odd and log the result to the console
function isEven(num)
{
  if(num % 2 === 0)
  {
     console.log(`${num} is a even number`);
     
  }
  else
  {
    console.log(`${num} is an odd number`);
    
  }
}
isEven(11);

//Task-2: Write a function to calculate the square of a number and return the result
let num1;
function squareOfNumber(num)
{
    num1 = num;
    return num*num;
}
let square = squareOfNumber(10);
console.log(`Square of ${num1} is ${square}`);

/* Function Expression */
//Task-3: Write a function expression to find the maximum of two numbers and log the result to the console
let maximumOfNumber = function(a, b){
    a>b ? console.log(`${a} is maximum`) : console.log(`${b} is maximum`);
}
maximumOfNumber(2, 10);

//Task-4: Write a function expression to concatenate two strings and return the result
let concatenateStrings = function(str1, str2){
   return (str1+str2);
}
let res = concatenateStrings("Hello", "World");
console.log(res);


/* Arrow Functions: */
//Task-5: Write an arrow function to calculate the sum of two numbers and return the result
let sumOfTwoNumbers = (a, b) => {
    return a+b;
}
let res1 = sumOfTwoNumbers(10, 20);
console.log(res1);

//Task-6: Write an arrow function to check if a string contains a specific character and return a boolean 
let checkStrings = (str, ch) => {
  return str.includes(ch, 0);
}
let res2 = checkStrings("Hello", 'o')
console.log(res2);

/*Function Parameters and Default values*/
//Task-7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function productOfNumbers(num1, num2=10)
{
     return num1*num2;
}
let res3 = productOfNumbers(20);
console.log(res3);

//Task-8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetingMessage(name, age = 27)
{
   return `Hello ${name}! you are ${age} year old`;
}
let greeting = greetingMessage("Mrityunjay");
console.log(greeting);

/*Higher Order Functions: */
//9. Write a higher-order function that takes a function and a number, and calls the function that many times.
let numbers = [4, 5, 6, 7, 8];
function productOfTwoNumbers(num1,num2)
{
    return num1*num2;
}
function higherOrderFunction(func, num)
{
   for(let i = 0; i < num; i++)
   {
     let n1 = numbers[i];
     let n2 = numbers[i+1];
     let res = func(n1,n2);
     console.log(`Product of ${n1} and ${n2} is ${res}`);
     
   }
}
higherOrderFunction(productOfTwoNumbers, 4);

//Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result.
let values = [1,2,3,4,5,6];
let increment = function(num){
  return ++num;
}
let decrement = function(res){
   return --res;
}
let calculate = function(inc,dec,value){
  // let result = inc(value);
  // let result1 = dec(result);
  // return [result, result1];
  return dec(inc(value));
}
let result = calculate(increment, decrement, values[3]);
console.log(result);
