//Lesson 3 Practice Problems

//>>>>>>>>>>Q2 Write 2 distinct ways of reversing the array without mutating the original arrray
// let numbers = [1, 2, 3, 4, 5];
// //when .slice() is executed, a shallow copy of the numbers array is created. Thus, not altering the original array. 
// console.log(numbers.slice().reverse());
// console.log(numbers); 

// //we use the spread syntax here to iterate over numbers array
// //spread syntax can be used when all elements from an object/array need to be included in a new array/object

// numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(numbers); 
// console.log(sortedArray);

// //use .forEach() method
// numbers = [1, 2, 3, 4, 5];
// let reversed = [];
// numbers.forEach((number) => {
//   //unshift() adds specified elements to the beginning of an array 
//   reversed.unshift(number);
// });

// console.log(reversed);
// console.log(numbers);

//>>>>>>>>>>Q6 create a new array with all values but un-nested
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// // flintstones = [].concat(...flintstones);
// // console.log(flintstones);

// //solve with .reduce()
// let newArray = [];
// newArray = flintstones.reduce((accumulator, element) => accumulator.concat(element), []);
// console.log(newArray);

//solve with .forEach()
//.concat() merges two arrays and does not recurse into nested array arguments
// let newArray = [];
// flintstones.forEach(person => {
//   newArray = newArray.concat(person);
// });
// console.log(newArray);

// //>>>>>>>>example using reduce to calculate average
// //parameters: accumulator/total, currentValue/amount, currentIndex, array
// const euros = [29.76, 41.85, 46.5];

// const average = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   if( index === array.length-1) { 
//     return total/array.length;
//   }else { 
//     return total;
//   }
// });

// console.log(average);

//>>>>>>>>>>Q7 Create an array from the object with only 2 of the elements
//solving using a for/in loop and checking to see when the object's property matches the request element name
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// for (let person in flintstones) {
//   if (person === 'Barney') {
//     newFlintstones.push(person, flintstones[person]);
//   }
// }

// console.log(newFlintstones);

//use Object.entries which looks at each key/value pair as an array
//.filter() looks at index 0 of each array to see if the name matches 'Barney'
//.shift() is used to remove the first element from the array and return that removed element
//without using .shift() the result would be a nested array

// let newFlintstones = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();
  
// console.log(newFlintstones);

//>>>>>>>>Q10 Write a one-line expression to count number of 't's

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// let lowercaseT = statement2.split('').filter(char => char === 't').length;
// console.log(lowercaseT);


//Easy 3 Practice Problems

//>>>>>>>>>daily double that creates a 2nd char for each letter
// function crunch(singleText) {
//   let doubleText = '';
//   let single = singleText.split('');
//   for (let i = 0; i < single.length; i++) {
//     doubleText = doubleText + single[i] + single[i];
//   }
//   return doubleText;
// }
// console.log(crunch('ddaaiillyy ddoouubbllee'));

//>>>>>>>>>>daily double that returns original string, not doubled
// function crunch(doubleText) {
//   let singleText = '';
//   for (let i = 0; i < doubleText.length; i++) {
//     if (doubleText[i + 1] !== doubleText[i]) {
//       singleText += doubleText[i];
//     }
//   }
//   return singleText;
// }

// console.log(crunch('a'));

//>>>>>>>>Bannerizer 
// function logInBox(string) {
//   let length = string.length;
//   let dashLine = '+' + '-'.repeat(length +2) + '+';
//   let emptyLine = '|' + ' '.repeat(length + 2) + '|';
//   console.log(dashLine);
//   console.log(emptyLine);
//   console.log('| ' + string + ' |');
//   console.log(emptyLine);
//   console.log(dashLine);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

//>>>>>>>> Stringy Strings
// function stringy(length) {
//   let output = '';
//   for (let i = 1; i < length + 1; i++) {
//     if (i % 2 === 0) {
//       output += '0';
//     }
//     else {
//       output += '1';
//     }
//   }
//   console.log(output);
// }
// stringy(6);
// stringy(9);

//>>>>>>>>Right Triangles 
// function triangle(height) {
//   //determines the rows for the triangle
//   for (let i = 0; i < height; i++) {
//     let row = '';

//     //logs the spaces for each row
//     for (let j = 1; j < height - i; j++) {
//       row += ' ';
//     }

//     //logs an * 
//     for (let k = 0; k < i; k++) {
//       row += '*';
//     }
//     console.log(row);
//   }
// }

// triangle(6);
// triangle(9);

//trying LS's solution with a while loop
// function triangle(height) {
//   let spaces = height - 1;
//   let stars = 1;

//   while (height > 0) {
//     console.log(' '.repeat(height) + '*'.repeat(stars));
//     spaces -= 1;
//     stars += 1;
//     height -= 1;
//   }
// }

// triangle(5);
// triangle(9);

//>>>>>>double doubles
// function twice(double) {
//   if (String(double).length % 2 !== 0) {
//     console.log(double * 2);
//     return;
//   }
//   let doubleString = double.toString();
//   let left = doubleString.substring(0, doubleString.length / 2);
//   let right = doubleString.substring(doubleString.length / 2, doubleString.length);

//   if (left === right) {
//     console.log(double);
//   }
//   else {
//     console.log(double * 2);
//   }

// }
// twice(37);
// twice(44);
// twice(444);
// twice(103103);

//>>>>>>>Clean up the words
// function cleanUp(text) {
//   let returnText = '';
//   for (let i = 0; i < text.length; i++) {
//     if (text.charCodeAt(i) < 65 && text.charCodeAt(i + 1) < 65) {
//       continue;
//     }
//     else if ((text.charCodeAt(i) < 65 && text.charCodeAt(i + 1) >= 65) || (text.charCodeAt(i) < 65 && i === text.length - 1)) {
//       returnText += ' ';
//     }
//     else {
//       returnText += text[i];
//     }
//   }
//   console.log(returnText);
// }

// cleanUp("---what's my +*& line?");    // " what s my line "


//>>>>>>>What century is that?
//need to look at relationship of centuries

//a function that will return the century with string ending 

function century(year) {
  let centuryYear = Math.ceil(year / 100);
  let centuryString = centuryYear.toString();
  
  //calls ending function to get the suffix for the century (-st, -nd, -rd, -th)
  console.log(ending(centuryString));

}

//function that takes last digit of the century and returns string ending 
function ending(centuryString) {

  let lastTwo = centuryString[centuryString.length - 2] + centuryString[centuryString.length - 1];
  if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {

    return centuryString += 'th';
  }

  let lastDigit = centuryString[centuryString.length - 1];
  
  // if (lastDigit === '1') {
  //   return centuryString += 'st';
  // }
  // else if (lastDigit === '2') {
  //   return centuryString += 'nd';
  // }
  // else if (lastDigit === '3') {
  //   return centuryString += 'rd';
  // }
  // else {
  //   return centuryString += 'th';
  // }

  //using switch case 
  switch (lastDigit) {
    case '1': return centuryString += 'st';
    case '2': return centuryString += 'nd';
    case '3': return centuryString += 'rd';
    default: return centuryString += 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"