/*1. Number Check Script: Write a script that checks if a number is positive,negative, or zero using if-else statements and logs the result */
let num = 10;
if(num > 0)
{
    console.log(`Positive number`);
}
else if(num<0)
{
    console.log(`Negative number`);
}
else
{
    console.log(`Zero`);
}

/* 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result */
let age = 18;
if(age>=18)
{
    console.log(`Eligible to vote`);
}
else 
{
    console.log(`Not eligible to vote`);
}


/*3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number(1-7) and logs the day name */

let day_of_week = 1;
switch (day_of_week) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
        console.log(`Invalid day of week`);
        break;
}

/*4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade */
let score = 39;
switch (true) {
    case score>=80:
        console.log(`A Grade`);
        break;
    case score>=60 && score<80:
        console.log(`B Grade`);
        break;
    case score>=50 && score<60:
        console.log(`C Grade`);
        break;
    case score>=40 && score<50:
        console.log(`D Grade`);
        break;
    default:
        console.log(`F Grade`);
        break;
}

/*5. Leap year check script: write a script that checks if a year is a leap year using multiple conditions and logs the result */
let year = 2020;
if((year % 100 !== 0 && year % 4 === 0) || (year % 100 === 0 && year % 400 === 0))
{
  console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}