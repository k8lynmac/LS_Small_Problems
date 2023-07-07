//#1. daily double
// function crunch(string) {
//   let newString = string.split('');
//   let stringArray = [];
//   for (let i = 0; i < newString.length; i++) {
//     if (newString[i] === newString[i-1]) {
//       continue;  
//     }
//     else {
//       stringArray.push(newString[i]);
//     }
//   }
//   newString = stringArray.join('');
//   console.log(newString);

// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

//#2. Bannerizer
// function logInBox(string) {
//   let horizontalRule = `+${'-'.repeat(string.length+2)}+`;
//   let emptyLine = `|${' '.repeat(string.length+2)}|`;  

//   console.log(horizontalRule);
//   console.log(emptyLine);
//   console.log(`| ${string} |`);
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }

// logInBox('To boldly go where no one has gone before.');

// #3. Stringy Strings
// function stringy(times) {
//   let string = '';
//   for (let i = 0; i < times; i++) {
//     if(i % 2 === 0) {
//       string += '1';
//     }
//     else {
//       string += '0';
//     }
//   }
//   console.log(string);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

//#4. Fibonacci by length (OBSOLETE)

// function fibonacci(digits) {

//   // let result = 1;
//   // let fiboArray = [1];

//   // for (let i = 1; i < ; i++) {
//   //   result = result + fiboArray[i]
//   //   fiboArray.push()
//   // }
//   return 0;
// }
// fibonacci(2n) === 7n;    // 1 1 2 3 5 8 13
// fibonacci(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// fibonacci(10n) === 45n;
// fibonacci(16n) === 74n;

//#5. Right Triangles
// function triangle(rows) {

//   for (let i = 0; i < rows; i++) {
//     let string = '';
      
//     for (let k = 0; k < rows - i - 1; k++) {
//         string += ' ';
//       }
      
//     for (let j = 0; j < i + 1; j++) {
//         string += '*';
//       }
    
//     console.log(string + '\n');
//   }
// }

// triangle(5);
// triangle(9);

//#6. Madlibs
// let rlsync = require('readline-sync');
// let noun = rlsync.question('Enter a noun: ');
// let verb = rlsync.question('Enter a verb: ');
// let adjective = rlsync.question('Enter an adj: ');
// let adverb = rlsync.question('Enter an adverb: ');

// console.log(`This is a test for the ${noun}`);
// console.log(`, ${verb}, `);
// console.log(` ${adjective}`);
// console.log(`, and, ${adverb}.`);

//#7. Double Doubles
// function twice(num) {
//   //checks if length of number is odd
//   if (num.toString().length % 2 !== 0) {
//     console.log(num * 2);
//     return;
//   }
//   //checks if number provided is a double number - left-side digits are the same as right-side digits
//   num = num.toString();
//   let center = Math.floor(num.length / 2);
//   let leftNumber = num.substring(0, center);
//   let rightNumber = num.substring(center);

//   if (leftNumber === rightNumber) {
//     console.log(num);
//   }
//   else {
//     console.log(Number(num) * 2);
//   }
//  }

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

//#8. Grade Book
// function getGrade(score1, score2, score3) {
//   let average = (score1 + score2 + score3) / 3; 
//   console.log(`${average}`);

//   if (average < 60) {
//     console.log('F');
//   } 
//   else if (average >= 60  && average < 70) {
//     console.log('D');
//   }
//   else if (average >= 70 && average < 80) {
//     console.log('C');
//   }
//   else if (average >= 80 && average < 90) {
//     console.log('B');
//   }
//   else {
//     console.log('A');
//   }
// }

// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

//#9. Clean up the words
// function cleanUp(stringEx) {
//   let newString = [];
//   for (let i = 0; i < stringEx.length; i++) {
//     if (stringEx.charCodeAt(i) < 65 && stringEx.charCodeAt(i + 1) < 65) {
//       continue;
//     }
//     else if (stringEx.charCodeAt(i) < 65 && stringEx.charCodeAt(i + 1) > 65) {
//       newString.push(' ');
//     }
//     else {
//       newString.push(stringEx[i]);
//     }
//   }
//   console.log(newString.join(''));
// }

// cleanUp("---what's my +*& line?");    // " what s my line "

//#10 What Century is that?

function century(year) {
  let centuryYear;
  if (year.toString().endsWith('0')) {
    centuryYear = year / 100;
  }
  else {
    centuryYear = Math.floor(year / 100) + 1;
  }
  return String(centuryYear) + centuryEnd(centuryYear);
} 

function centuryEnd(centuryYear) {
  if (centuryYear % 100 === 11 || centuryYear % 100 === 12 || centuryYear % 100 === 13) {
    return 'th';
  }

  if (String(centuryYear).endsWith('1')) {
    return 'st';
  }
  else if (String(centuryYear).endsWith('2')) {
    return 'nd';
  }
  else if (String(centuryYear).endsWith('3')) {
    return 'rd';
  }
  else {
    return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"