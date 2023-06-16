// //#1. Is it odd?
// function isOdd(number) {
//   if (number %2 != 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(0)); // => false

// //#2. Odd numbers
// for (let i = 1; i < 100; i += 2) {
//   console.log(`${i}`);
// }

// //#3. Even numbers
// for (let i = 2; i < 100; i += 2) {
//   console.log(i);
// }

// //#4. How big is the room?
// let rlSync = require('readline-sync');
// let length = rlSync.question('Enter length of the room in meters:');
// let width = rlSync.question('Enter the width of the room in meters:');
// let area = length*width;
// console.log(`The area of the room is ${area} square meters (${area*10.7639} square feet.)`);

// //#5. Tip Calculator
// let rlSync = require('readline-sync');
// let bill = Number(rlSync.question('What is the bill? '));
// let tip_percentage = Number(rlSync.question('What is the tip percentage? '));
// let tip = bill*(tip_percentage/100);
// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${(tip+bill).toFixed(2)}`);

// //#6. Sum/Product of Consecutive ints
// let rlSync = require('readline-sync');
// let integer = Number(rlSync.question('Enter an int greater than 0: '));
// let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');
// let sum = 0;
// let product = 1;

// if (operation === 's') {
//   for (let i = 1; i < integer + 1; i++) {
//     sum += i;
//   }
//   console.log(`The sum of the integers between 1 and ${integer} is ${sum}`);
// }
// else {
//   for (let i = 1; i < integer + 1; i++) {
//     product *= i;
//   }
//   console.log(`The sum of the integers between 1 and ${integer} is ${product}`);
// }

//#7. Short Long Short
// function shortLongShort(string1, string2) {
//   let len1 = string1.length;
//   let len2 = string2.length;
//   if (len1 < len2) {
//     console.log(string1 + string2 + string1);
//   }
//   else {
//     console.log(string2 + string1 + string2);
//   }
// }
// shortLongShort('abc', 'defgh');   

// //#8 Leap Years
// function isLeapYear(year) {
//     if (year % 400 === 0) {
//       console.log(true);
//       return true;
//     } else if (year % 100 === 0) {
//       console.log(false);
//       return false;
//     } else if (year% 4 === 0) {
//       console.log(true);
//       return true;
//     }
//     else { 
//       console.log(false);
//       return false;
//     }
//   }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// #9. Leap Years Part 2 
// function isLeapYear(year) {
//     if (year < 1752 && year % 4 === 0) {
//       console.log(true);
//       return true;
//     }
//     if (year % 400 === 0) {
//       console.log(true);
//       return true;
//     } else if (year % 100 === 0) {
//       console.log(false);
//       return false;
//     } else if (year% 4 === 0) {
//       console.log(true);
//       return true;
//     }
//     else { 
//       console.log(false);
//       return false;
//     }
//   }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

// // #10. Multiples of 3 and 5

// function multisum(number) {
//   let count = 0;
//   for (let i = 1; i < number + 1; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       //console.log(i);
//       count += i;
//     }
//   }
//   console.log(count);
//   return count;
// }

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

//#11 UTF-16 String value
function utf16Value(string) {
  let value = 0;
  for (let i = 0; i<string.length; i++) {
    value += string.charCodeAt(i);
  }
  console.log(value);
  return value;
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0 