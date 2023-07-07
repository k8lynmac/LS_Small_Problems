//#1. 
// string = 'The Flintstones Rock!';
// for (let i = 0; i < 10; i++) {
//   console.log(' '.repeat(i)+string);
// }

//#2. return a string that swaps the case of all the letters
// let munstersDescription = "The Munsters are creepy and spooky.";
// let array = munstersDescription.split('');

// for (let i = 0; i < array.length; i++) {
//   //checks if it's lower case, ASCII code > 96
  
//   if (array[i].charCodeAt() >= 97) {
//     array[i] = array[i].toUpperCase();
//   }
//   else {
//     array[i] = array[i].toLowerCase();
//   }
// }
// console.log(array.join(''));

//#3. 
// function factors(number) {
//   let divisor = number;
//   let factors = [];

//my solution
//   for (let i = divisor; i > 0; i--) {
//     if (number % i === 0) {
//       factors.push(number / i);
//     }
//   }
//   return factors;
// }

//LS solution
// while (divisor > 0) {
//   if (number % divisor === 0) {
//     factors.push(number / divisor);
//   }
//   divisor -= 1;
// }
// return factors;
// }

// console.log(factors(10));
// console.log(factors(0));
// console.log(factors(-10));

//#4. what's the difference between the 2 implementations below?
//push adds specified elements to end of an array and returns new length of the array 
//mutates the argument represented by buffer -- array is different when the function returns
// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// //concat merges two arrays and returns a new array
// //doesn't mutate the argument specified by the value of buffer
// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// //#8. 
// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }
// messWithDemographics(munsters);
// console.log(munsters);


//#9. returns paper
// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

//#10.

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));