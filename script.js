// Web and Mobile Application Development, Batch-04 Section-C
// Requirements:
// 1- Please deploy into surge, and create online link
// 2- Take input through DOM form
// 3- Show output of all programs in HTML Tags eg, h1,h2,p
// 4- Submit the assignment at link below
// Programs:
// If-else exercise
// 1. Write a js program to find maximum between two numbers.
// let num1 = 12;
// let num2   = 18;

// if (num1>num2) {
//     // console.log(num1, "is greater than", num2);
// } else {
//     // console.log(num2, "is greater than", num1);
// }
// 2. Write a js program to find maximum between three numbers.

// let num1 = 1000;
// let num2 = 800;
// let num3 = 900;

// if (num1>num2 && num1> num3) {
//     console.log(num1,"is greater than",num2, "&", num3);
// }
// else if (num2>num1 && num2>num3) {
//   console.log(num2, "is graeter than", num1, "&", num3);
// }
// else {
//     console.log(num3, "is graeter than", num1, "&", num2);
// }

// 3. Write a js program to check whether a number is negative, positive or zero.

// let num1 = 10;

// if (num1!=0 && num1>0) {
//     console.log("Given number is Positive");
// }
// else if (num1!=0 && num1<0) {
//     console.log("Given number is negative");
// }
// else{
//     console.log("Given number is equal to 0");
// }

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// let num1 = 110;
// let check1 = num1/5;
// let result = check1*5;
// let result2 = result-num1;

// let check2 = num1/11;
// let check3 = num1/11;
// let result3 = check3*11;
// let result4 = result3-num1;

// if (result2==0 && result4==0) {
//     console.log("Given number is divisible by 5 & 11");
// } else {
//     console.log("Given number is not divisible by 5 & 11");

// }

// 5. Write a js program to check whether a number is even or odd.

// let num1= 10;

// let num2 = 2;

// let result = num1 % num2

// console.log(result);
// if (result === 0) {
//     console.log("Given number is even");
// } else {
//     console.log("Given number is odd");
// }

// 6. Write a js program to check whether a year is leap year or not.
// 7. Write a js program to check whether a character is alphabet or not.

// let alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// console.log(alphabet);
// let b = prompt("Please enter Input");
// let c = alphabet.includes(b, 0);
// if (c===true) {
//   console.log("Given Input is alphabet");
// } else {
//   console.log("Given Input is not alphabet");
// }

// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// let vowel = ["a", "e", "i", "o", "u"];
// let consonants = [
//   "b",
//   "c",
//   "d",
//   "f",
//   "g",
//   "h",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let b = prompt("Enter Input");

// let c = vowel.includes(b, 0);

// let d = consonants.includes(b,0)
// if (c===true) {
//     console.log("Given Character is Vowel");
// }
// else if (d===true) {
//     console.log("Given Character is Consonent");
// }
// else{
//     console.log("Given character is other Character");
// }

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// let alphabet =
//  [
//       "a",
//       "b",
//       "c",
//       "d",
//       "e",
//       "f",
//       "g",
//       "h",
//       "i",
//       "j",
//       "k",
//       "l",
//       "m",
//       "n",
//       "o",
//       "p",
//       "q",
//       "r",
//       "s",
//       "t",
//       "u",
//       "v",
//       "w",
//       "x",
//       "y",
//       "z",
//     ];
// let specialChar = ["`","`", "@", "#", "$", "%", "^", "&", "*", "(", ")", "()", "{", "}", "[", "]", "[]","|",";",":","'",",",".","<",">","?","/"];

// let input = prompt("Enter Input");

// let alpha = alphabet.includes(input,0);

// let spCha =  specialChar.includes(input,0);

// if (alpha) {
//     console.log("Given Character is alphabet");
// }
// else if (spCha) {
//     console.log("Given character is special Character");
// }
// else{
//     console.log("Given charcter is a digit");
// }

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// let alphabets =   'abcdefghijklmnopqrstuvwxyz';
// // const upperCase = alphabets.map(alphabet => alphabet.toUpperCase());
// let input = prompt('Please Enter Input');

// let upperCase = alphabets.toUpperCase();
// let upperCaseCheck= upperCase.includes(input,0);
// let lowerCaseCheck= alphabets.includes(input, 0);
// // console.log(upperCase);
// if (upperCaseCheck) {
//     console.log("Charactr is in upper Case");
// }
// else if (lowerCaseCheck) {
//     console.log("Character is in lower Case");
// }
// else{
//     console.log("Other Character");
// }

// 11. Write a js program to input week number and print week day.

// let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday","sunday"];

// let input = parseInt(prompt("Enter a number"));

// if (input===1) {
//     console.log(days[0]);
// }
// else if (input===2) {
//     console.log(days[1]);
// }
// else if (input===3) {
//     console.log(days[2]);
// }
// else if (input===4) {
//     console.log(days[3]);
// }
// else if (input===5) {
//     console.log(days[4]);
// }
// else if (input===6) {
//     console.log(days[5]);
// }
// else if (input===7) {
//     console.log(days[6]);
// }
// else{
//     console.log("You have entered a wrong week number");
// }

// 12. Write a js program to input month number and print number of days in that month.

// let monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// let input = parseInt(prompt("Enter Month number in year i.e from 1 to 12"));

// if (input === 1) {
//   console.log("Number of Days in January are", monthsDays[0]);
// } else if (input === 2) {
//   console.log("Number of days in eb are", monthsDays[1]);
// } else if (input === 3) {
//   console.log("Number of days in March are",monthsDays[2]);
// } else if (input === 4) {
//   console.log("Number of days in April are",monthsDays[3]);
// } else if (input === 5) {
//   console.log("Number of days in May are",monthsDays[4]);
// } else if (input === 6) {
//   console.log("Number of days in June are",monthsDays[5]);
// } else if (input === 7) {
//   console.log("Number of days in July are",monthsDays[6]);
// } else if (input === 8) {
//   console.log("Number of days in Aug are",monthsDays[7]);
// } else if (input === 9) {
//   console.log("Number of days in Sep are",monthsDays[8]);
// } else if (input === 10) {
//   console.log("Number of days in Oct are ",monthsDays[9]);
// } else if (input === 11) {
//   console.log("Number of days in Nov are",monthsDays[10]);
// } else if (input === 12) {
//   console.log("Number of days in Dec are",monthsDays[11]);
// } else {
//   console.log("You have entered a wrong week number");
// }

// 13. Write a js program to count total number of notes in given amount.

let notesDenomination = [1, 2, 5, 10, 20, 50, 100, 500, 1000, 5000];
let maximum = Math.max(...notesDenomination);
let minimum = Math.min(...notesDenomination);
// console.log(maximum);
// console.log(minimum);

// let amount = parseInt(prompt("Enter Your Amount"));

// let count = amount.toString().length;
// console.log(count);

// if ((count === 1)) {
//   const oneDigitAmount = notesDenomination.slice(0,3);
//   // for (let index = oneDigitAmount.length-1; index >= 0; index--) {
//   // console.log(oneDigitAmount[index]);
//   // console.log(oneDigitAmount);
//     let notesOne= parseInt (amount % oneDigitAmount[2]);
//     let notesTwo= parseInt (amount % oneDigitAmount[1]);
//     let notesThree=  parseInt  (amount % oneDigitAmount[0]);
//       if (notesOne => 0) {
//         if (notesOne===0) {
//           console.log("Notes Served valuing", oneDigitAmount[2]);
//         }
//         else if (notesOne===1) {
//           console.log("Notes Served valuing", oneDigitAmount[2], oneDigitAmount[0] );
//         }
//         else if (notesOne===2) {
//           console.log("Notes Served valuing", oneDigitAmount[2], oneDigitAmount[1] );
//         }
//         else if (notesOne===3) {
//           console.log("Notes Served valuing", oneDigitAmount[2], oneDigitAmount[1],oneDigitAmount[0] );
//         }
//         else if (notesOne===4) {
//           console.log("Notes Served valuing", oneDigitAmount[2], oneDigitAmount[1],oneDigitAmount[1] );
//         }
// else if (notesTwo===0) {
//   console.log("Notes Served valuing", oneDigitAmount[1],oneDigitAmount[1]);

// }
// }
//  }
// let notesOne = amount/Math.max(...oneDigitAmount);
// let notesTwo = amount/oneDigitAmount[2];
// console.log(oneDigitAmount);
// }

// 14. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// let physics = parseInt(prompt("Enter Your Physics Marks"));
// let chemistry = parseInt(prompt("Enter Your Chemistry Marks"));
// let biology = parseInt(prompt("Enter Your Biology Marks"));
// let mathemetics = parseInt(prompt("Enter Your Mathemetics Marks"));
// let computer = parseInt(prompt("Enter Your Computer Marks"));

// let obtainedMarks = physics + chemistry + biology + mathemetics + computer;
// let totalMarks = 500;
// let percentMarks = (obtainedMarks / totalMarks) * 100;

// if (obtainedMarks>500) {
//   console.log("You have entered wrong input");
// }
//   else if (percentMarks >= 90) {
//   console.log("Your percentage is", percentMarks,"%", "& Grade A");
// } else if (percentMarks >= 80) {
//   console.log("Your percentage is", percentMarks,"%", "& Grade B");
// } else if (percentMarks >= 70) {
//   console.log("Your percentage is", percentMarks,"%", "& Grade C");
// } else if (percentMarks >= 60) {
//   console.log("Your percentage is", percentMarks,"%", "& Grade D");
// } else if (percentMarks >= 40) {
//   console.log("Your percentage is", percentMarks,"%", "& Grade E");
// } else if (percentMarks < 40) {
//   console.log("Your percentage is", percentMarks,"%", "& Grade F");
// }

// 15. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// let basicSalary = parseInt (prompt("Enter Your Salary"));

// if (basicSalary<=10000) {
//   console.log("Your Gross Salary is", (basicSalary+basicSalary));
// }
// else if (basicSalary<=20000) {
//   console.log("Your Gross Salary is", (basicSalary*115/100)+basicSalary);
// }
// else if (basicSalary>20000) {
//   console.log("Your Gross Salary is", (basicSalary*125/100)+basicSalary);
// }

// 16. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

let input = parseInt(prompt("Enter Your total units to calculate bill"));

let firstCateogary = 0.5;
let firstCateogaryBill = 50 * firstCateogary;
let secondCateogary = 0.75;
let secondCateogaryBill = 100 * secondCateogary;
let thirdCateogary = 1.2;
let thirdCateogaryBill = 100 * thirdCateogary;
let fourthCateogary = 1.5;

if (input <= 50) {
  let totalBill = input * firstCateogary;
  console.log(
    "Your Electricity bill is Rs.",
    totalBill + (totalBill * 20) / 100
  );
} else if (input > 50 && input <= 150) {
  let aboveFiftyUnits = input - 50;
  let aboveFiftyUnitsBill = aboveFiftyUnits * secondCateogary;
  let totalBill = firstCateogaryBill + aboveFiftyUnitsBill;
  let additionalSurcharge = (totalBill * 20) / 100;
  console.log("Your electricity bill is Rs.", totalBill + additionalSurcharge);
} else if (input > 150 && input <= 250) {
  let aboveOneFiftyUnits = input - 150;
  let aboveOneFiftyUnitsBill = aboveOneFiftyUnits * thirdCateogary;
  let totalBill =
    firstCateogaryBill + secondCateogaryBill + aboveOneFiftyUnitsBill;
  let additionalSurcharge = (totalBill * 20) / 100;
  console.log("Your electricity bill is Rs.", totalBill + additionalSurcharge);
} else if (input > 250) {
  let aboveTwoFiftyUnits = input - 250;
  let aboveTwoFiftyUnitsBill = aboveTwoFiftyUnits*fourthCateogary;
  let totalBill = firstCateogaryBill + secondCateogaryBill+thirdCateogaryBill+aboveTwoFiftyUnitsBill;
  let additionalSurcharge = (totalBill * 20) / 100;
  console.log("Your electricity bill is valuing.", totalBill + additionalSurcharge);
}

// Deadline: 08/12/2021!
// Submit: https://forms.gle/vnVFg4dRWFADLJK2A
// Regards
// Naveed Sarwar
