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
let rlsync = require('readline-sync');
let noun = rlsync.question('Enter a noun: ');
let verb = rlsync.question('Enter a verb: ');
let adjective = rlsync.question('Enter an adj: ');
let adverb = rlsync.question('Enter an adverb: ');

console.log(`This is a test for the ${noun}`);
console.log(`, ${verb}, `);
console.log(` ${adjective}`);
console.log(`, and, ${adverb}.`);
