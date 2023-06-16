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