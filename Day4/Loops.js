/* For Loop: */
//Task-1: Write a program to print numbers from 1 to 10 using a for loop
console.log(`Numbers from 1 to 10 :`);

for (let i = 1; i <= 10 ; i++) {
    console.log(i); 
}

//Task-2: Write a program to print the multiplication table of 5 using a for loop
console.log(`Multiplication table of 5`);

for(let i = 1; i<=10; i++)
{
    console.log(`5x${i} = ${5*i}`);
    
}

/* While Loop: */
//Task-3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let num = 1;
console.log(`Sum of numbers from 1 to 10 :`);

while (num<=10) {
    sum += num;
    num++;
}
console.log(sum);

//Task-4: Write a program to print numbers from 10 to 1 using a while loop
let n = 10;
console.log(`Numbers from 10 to 1 :`);
while(n>=1)
{
    console.log(n);
    n--;
    
}

/* Do...While Loop: */
//Task-5: Write a program to print numbers from  1 to 5 using a do...while loop
let index = 1;
do {
  console.log(index);   
  index++;
} while (index<=5);

//Task-6: Write a program to calculate the factorial of a number using a do...while loop
let num3 = 6;
let num4 = num3;
let fact = 1;
do {
   fact = fact*num4;
   num4--;
} while (num4!=0);
console.log(`Factorial of ${num3} is ${fact}`);


/* Nested Loops */
// Task-7: Write a program to print a pattern using nested for loops:
/* *
   * *
   * * *
   * * * *
   * * * * *
*/
for(let row = 1; row<=5; row++)
{
    for(let col = 1; col<=row; col++)
    {
        if(row === 1)
        {
            console.log(`*`);
            
        }
        else
        {
          process.stdout.write(`* `);
        }
    }
    if(row===1)
    {
        continue;
    }
    console.log();
}

/* Loop Control Statements */
//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let num = 1; num<=10; num++)
{
    if(num === 5)
    {
        continue;
    }
    console.log(num);
    
}

//Task-9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement
for(let num = 1; num<=10; num++)
{
    if(num === 7)
    {
        break;
    }
    console.log(num);
    
}