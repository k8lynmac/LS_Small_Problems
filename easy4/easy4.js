//#1 Searching 101

// let rlsync = require('readline-sync');
// let array = [];

// getInput();

// function getInput() {

//   for (let i = 0; i < 6; i++) {
//     let userNumber = rlsync.question(`Enter number ${i + 1}: `);
//     array.push(userNumber);
//   }
//   checkLast(array);
// }

// function checkLast(arr) {
//   let last = arr[5]
//   arr.pop();
//   if (arr.includes(last)) {
//     console.log(`The number ${last} appears in ${arr}`);
//   }
//   else {
//     console.log(`The number ${last} does not appear in ${arr}`);
//   }
// }

//#2. Palindromic Strings (Part 1)
// function isPalindrome(text) {
// //   let compare1 = text.split('');
// //   let compare2 = text.split('').reverse();

// //   for (let i = 0; i < compare1.length; i++) {
// //     if (compare1[i] !== compare2[i]) {
// //       return false;
// //     }
// //   }
// //   return true; 

// //much simpler version 
//   return text === text.split('').reverse().join('');

// }


// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

//#3. Palindromic Strings (Part 2) 
// function isRealPalindrome(text) {
//   text = text.toLowerCase();
//   let newText = [];

//   for (let i = 0; i < text.length; i++) {
//     if (text.charCodeAt(i) > 65) {
//       newText.push(text.charCodeAt(i));
//     }
//   }

//   return newText.join('') === newText.reverse().join('');
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

//#4. Palindromic Numbers
// function isPalindromicNumber(num) {
//   num = num.toString();
//   return num === num.split('').reverse().join('');
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

//#5. Running Totals
// function runningTotal(arr) {
//   let newArr = [];
//   let count = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(count);
//     count += arr[i + 1];
//   }
//   return newArr;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

//#6. Letter Counter (Part 1) 
// function wordSizes(text) {
//   // key/value pair object
//   let objCounts = {};
//   let words = text.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     let lengthWord = words[i].length;

//     if (lengthWord === 0) {
//     continue;
//     }

//     //if property doesn't exist/is undefined, we create it and set it equal to 0
//     if (!objCounts[lengthWord]) {
//       objCounts[lengthWord] = 0;
//     }
//     objCounts[lengthWord] += 1;
//   }

//   return objCounts;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

//#7 Letter Counter (Part 2)
// function wordSizes(text) {
//   let words = text.split(' ');
//   let length = words.length;
//   let obj = {};

//   for (let i = 0; i < length; i++) {
//     let word = words[i].split('').filter(newWord => newWord.charCodeAt() > 65).join('');

//     let count = word.length;
//     if (count === 0) {
//       continue;
//     }
    
//     if (!obj[count]) {
//       obj[count] = 0;
//     }
     
//     obj[count] += 1;

//   }
//   return obj;
// }



// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));                                            // {}

//#8. Letter Swap -- swap first and last letters 
// function swap(text) {
//   let array = text.split(' ');

//   //loop to look at each word within array
//   for (let i = 0; i < array.length; i++) {
//     let newWord = '';
//     //console.log(array[i]);
//     //loop to look each letter of identified word 
//     for (let j = 0; j < array[i].length; j++) {
//       let word = array[i];

//       if (j === 0) {
//         newWord = newWord + word[word.length - 1];
//         //console.log(newWord);
//       }
//       else if (j === array[i].length - 1) {
//         newWord = newWord + word[0];
//       }
//       else {
//         newWord = newWord + word[j];
//       }
//     }
//     array[i] = newWord;
//   }
//   return array.join(' ');
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// //#9. Convert string to a number
// function stringToInteger(str) {
//   let length = str.length;
//   let place = 1;
//   let sum = 0;

//   //all object keys are strings
//   let digits = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   }

//   for (let i = length - 1; i >= 0; i--) {
//     //4*1000 + 3*100 + 2*10 + 1*1
//     let digit;
//     for ([key, value] of Object.entries(digits)) {
//       if (key === str[i]) {
//         digit = value;
//         continue;
//       }
//     }
//     sum += place * digit;
//     //console.log(sum);
//     place = place * 10;

//     if (sum == str) {
//       //console.log(true);
//       return sum;
//     }
//   }
// }
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// // #10. String to a Signed Number
// function stringToSignedInteger(str) {
//   let length = str.length;
//   let place = 1;
//   let sum = 0;

//   //all object keys are strings
//   let digits = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   }

//   for (let i = length - 1; i >= 0; i--) {
//     //4*1000 + 3*100 + 2*10 + 1*1
//     let digit;
//     for ([key, value] of Object.entries(digits)) {
//       if (key === str[i]) {
//         digit = value;
//         continue;
//       }
//       if (str[i] === '-') {
//         return sum * -1;
//       }
//       else if (str[i] === '+') {
//         return sum;
//       }
//     }
//     sum += place * digit;
//     //console.log(sum);
//     place = place * 10;

    
//     if (sum == str) {
//       //console.log(true);
//       return sum;
//     }
//   }
// }
// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// // #11. Convert Number to a String
// function integerToString(num) {
//   let strNum = '';
//   strNum += num;
//   console.log(strNum);
//   console.log('This is a string');
// }

// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"

//#12 Convert signed number to a string
function signedIntegerToString(num) {
  let strNum = '';
  
  if (num > 0) {
    strNum = strNum + '+' + num;
  }
  else if (num < 0) {
    strNum = strNum + num;
  }
  else {
    strNum += num;
  }
  return strNum;
  
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");