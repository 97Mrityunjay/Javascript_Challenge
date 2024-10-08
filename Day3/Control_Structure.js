/* If-Else Statements */
//1. Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 10;
if(num>0)
{
    console.log("Number is positive");
}
else if(num<0)
{
  console.log("Number is negative");
}
else{
    console.log("0");
}

//2. Write a program to check if a person is eligible to vote(age>=18) and log the result to the console
let num1 = 16;
if(num1>=18)
{
  console.log(`Eligible to vote`);
}
else{
  console.log(`Not eligible to vote`);
}

/* Nested If-Else Statements */
//3. Write a program to find the largest of three numbers using nested if-else statements
let n1 = 200;
let n2 = 900;
let n3 = 100;
if(n1>n2)
{
    if(n1>n3)
    {
        console.log(`${n1} is largest number`);
    }
    else{
        console.log(`${n3} is largest number`);
    }
}
else{
    if(n2>n3)
    {
        console.log(`${n2} is largest number`);
    }
    else{
        console.log(`${n3} is largest number`);
    }
}

/*Switch Case: */
//4. Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to console
let day_of_week = 5;
switch (day_of_week) {
    case 1:
         console.log("Monday");
        break;
    case 2:
         console.log("Tuesday");
         break;
    case 3:
         console.log("Wednesday");
         break;
    case 4:
         console.log("Thursday");
         break;
    case 5:
         console.log("Friday");
         break;
    case 6:
         console.log("Saturday");
         break;
    case 7:
         console.log("Sunday");
         break;
    default:
        console.log("Invalid day of week");
        break;
}
//5.Write a program that uses a switch case to assign a grade('A','B','C','D','F') based on a score and log the grade to the console.
 let score = 95;
 switch (true) {
    case score>=80:
             console.log("A Grade");
             break;
    
    case score>=60 && score<80:
            console.log("B Grade");
            break;
    case score>=50 && score<60:
            console.log("C Grade");
            break;
    case score>=40 && score<50:
           console.log("D Grade");
           break;
    default:
         console.log("F Grade");
        break;
 }

 /* Conditional(Ternary) Operator */
 //6. Write a program that uses the ternary operator to check if a number is even or odd and log the result to console.
 let num2 = 60;
 (num2 % 2 === 0) ? console.log(`${num2} is an even number`) : console.log(`${num2} is an odd number`);

 /* Combining Conditions: */
 //7. Write a program to check if a year is a leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
 let year = 2004;
if(year%100!==0 && year % 4 === 0)
{
    console.log(`${year} is a leap year`);
}
else if(year % 100 === 0 && year % 400 === 0)
{
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}