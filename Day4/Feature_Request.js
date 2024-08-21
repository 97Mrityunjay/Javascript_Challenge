/*1. Number printing script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop */

//Print numbers from 1 to 10 using while loop
let num1 = 1;
console.log(`Numbers from 1 to 10`);
while(num1<=10)
{
    console.log(num1);
    num1++;
}

//Print numbers from 1 to 10 using for loop
console.log(`Numbers from 1 to 10`);
for(let num = 1; num <= 10; num++)
{
    console.log(num);
    
}


/* 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop */
console.log(`Multiplication table of 5`);
for(let num = 1; num <= 10; num++)
{
    console.log(`5x${num} = ${5*num}`);
    
}

/*3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops*/
console.log(`Pattern of stars`);

for(let row = 1; row <= 5; row++)
{
    for(let col = 1; col <= row; col++)
    {
        if(row === 1)
        {
            console.log(`*`);
        }
        else{
            process.stdout.write(`* `);
        }
    }
    if(row === 1)
    {
        continue;
    }
    console.log();
}

/*4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loops */
let sum = 0;
let num2 = 1;
while(num2 <= 10)
{
    sum += num2;
    num2++;
}
console.log(`Sum of numbers from 1 to 10 is ${sum}`);


/*5. Factorial calculation Script: Create a script that calculates the factorial of a number using a do...while loop */
let num3 = 5;
let num4 = num3;
let fact = 1;
do {
    fact = fact*num4;
    num4--
} while (num4!=0);
console.log(`Factorial of ${num3} is ${fact}`);
