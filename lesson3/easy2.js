//#1.
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.replace('important', 'urgent'));

//#2. 
// let numbers = [1, 2, 3, 4, 5];
// let reversed = numbers.slice().reverse();
// console.log(numbers);
// console.log(reversed);

// numbers = [1, 2, 3, 4, 5];
// let reversed = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(numbers);
// console.log(reversed);

//#3. 
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

//#4. 
// let famousWords = "seven years ago...";
// console.log('Four score and ' + famousWords);
// console.log('Four score and'.concat(' ', famousWords));

//#5.  
// numbers = [1, 2, 3, 4, 5];
// let removed = numbers.splice(2, 1);
// console.log(numbers);

//#6.
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// flintstones = [].concat(...flintstones);
// console.log(flintstones);

//#7.
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let array = [];
// for (const [key, value] of Object.entries(flintstones) ) {
//   if (key === 'Barney') {
//     array = [].concat([key, value]);
//   }
// }

// Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift(); 

// console.log(array);

//#8. deter,ime whether objects are arrays 
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

//#9. 
// let title = "Flintstone Family Members";
// let length = title.length;
// console.log('x'.repeat((40-length)/2) + title + 'x'.repeat((40-length)/2));

//#10. count number of lowercase t's
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let count = 0;

// for (let i = 0; i < statement1.length; i++) {
//   if (statement1[i] === 't') {
//     count += 1;
//   }
// }
// for (let i = 0; i < statement2.length; i++) {
//   if (statement2[i] === 't') {
//     count += 1;
//   }
// }
// console.log(count);

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);