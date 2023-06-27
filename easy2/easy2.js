// #1. Welcome Stranger
// function greetings(array, object) {
//   let name = '';
//   for (let i = 0; i < array.length; i++) {
//     if (i === array.length - 1) {
//       name += array[i];
//       break;
//     }
//     name += array[i] + ' '
//   }
//   return (`Hello, ${name}! Nice to have a ${object.title} ${object.occupation} around.`);
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// //#2. Greeting a user
// let rlSync = require('readline-sync');
// let user = rlSync.question('What\'s your name? ');
// if (user[user.length - 1] === '!') {
//   user = user.slice(0, -1);
//   console.log(`HELLO ${user.toUpperCase()}. WHY ARE WE SCREAMING`);
// }
// else {
//   console.log(`Hello ${user}`); 
// }

//#3. Multiply 2 numbers
// function multiply(x, y) {
//   return x*y;
// }
// console.log(multiply(5, 3) === 15);

//#5. Arithmetic Integer
// let rlSync = require('readline-sync');
// let num1 = Number(rlSync.question('Enter number 1: '));
// let num2 = Number(rlSync.question('Enter number 2: '));
// console.log(`${num1+num2}`);
// console.log(`${num1-num2}`);
// console.log(`${num1*num2}`);
// console.log(`${num1/num2}`);

//#6. End is Near
// function penultimate(string) {
//   let array = string.split(' ');
//   return array[array.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

//#7. Exclusive Or
// function xor(value1, value2) {
//   if (value1 && value2) {
//     return false;
//   }
//   else if (value1 || value2) {
//     return true;
//   }
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

//#8. Odd Lists
// function oddities(array) {
//   let newArray = [];
//   for (let i = 0; i <  array.length; i += 2) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

//#9. How old is Teddy?
// function randomBetween(min, max) {
//   let age = Math.floor((Math.random() * (max - min + 1) + min));
//   console.log(`Teddy is ${age} years old!`);
// }

// randomBetween(20, 120);

// //#10. When will I retire?
// let rlsync = require('readline-sync');
// let age = rlsync.question('What is your age? ');
// let retireAge = rlsync.question('When do you want to retire? ');

// function calculate(age, retireAge) {
//   let year = new Date().getFullYear();
//   let retireYear = (retireAge - age) + year;

//   console.log(`It's ${year}. You will retire in ${retireYear}.`);
//   console.log(`You have ${retireYear - year} to go!`);
// }

// calculate(age, retireAge);

//#11. Get middle char
// function centerOf(string) {
//   let length = string.length;
//   //console.log(length);
//   let array = string.split('');
//   //console.log(array);
//   if (length % 2 === 0) {
//     console.log(`${array[length / 2 - 1]} ${array[length / 2]}`);
//   }
//   else if (length % 2 > 0) {
//     //console.log('odd');
//     console.log(array[Math.floor(length/2)]);
//   }
// }
 
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

//#12. Always return negative
function negative(number) {
  if (number >= 0) {
    return number * -1;
  }
  else if (number < 0) {
    return number;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0