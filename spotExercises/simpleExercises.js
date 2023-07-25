//>>>>>GENERATING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function generateArr(startNum, endNum) {
//   let numArr = [];
//   for (let i = startNum; i < endNum + 1; i++) {
//     numArr.push(i);
//   }
//   console.log(numArr);
// }

//generateArr(3, 10);





//>>>>>COUNTING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//fx that takes a string as an argument and returns object with letters of the string and occurence 
// function countOccurencies(textString) {
//   let obj = {};

//   for (let i = 0; i < textString.length; i++) {
//     let char = textString[i];
//     if (!obj[char]) {
//       obj[char] = 0;
//     }
//     obj[char] += 1;
//   }
//   console.log(obj);
//   return obj;
// }

// //let obj = countOccurencies('abbab');




// //fx that takes returned object and returns a string with all letters that appear in passed obj
// function returnString(obj) {
//   let string = '';

//   for (let [key, value] of Object.entries(obj)) {
//     string += key.repeat(value);
//   }
//   console.log(string);
// }

//returnString(obj);




//Create a function that takes a string a s an argument and returns a number of words in that string
// function countWords(textString) {
//   let length = textString.split(' ').length;
//   return length;
// }
//console.log(countWords('hello world'));




//Create a function that takes two strings as an argument and returns a number representing occurrences of the second argument as a sub-string of the first argument,
// function countSubstr(text1, substring1) {
//   let count = 0;

//   while (text1.length > 0) {
//     if (text1.indexOf(substring1) > 0) {
//       count +=1;
//       text1 = text1.slice(text1.indexOf(substring1) + 1);
//       if (!text1.includes(substring1)) {
//         console.log(count);
//         return;
//       }
//     }
//   }
//   console.log(count);
//   return count;
// }
// countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' ); // => 3
// countSubstr('This is a test to twist', 'is' );




//Create a function that takes an array and a string as an arg and returns # of occurences
// function countEle(arr, type) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === type) {
//       count += 1;
//     }
//   }
//   console.log(count);
//   return count;
// }

// countEle(['name', 'year', 'age', 'name'], 'name'); // => 2
// countEle([1,2,3,4,5,1,2,3,4], 2); //=> 2




// Create a function that takes a string as an argument and returns a number representing number of words that occurred more than once in that string
// function countDuplic(inputString) {
//   let words = inputString.split(' ').sort();
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//    if (words[i] === words[i + 1]) {
//     count += 1;
//    }
//   }
//   console.log(count);
// }

// countDuplic('one two one three two'); //=> 2
// countDuplic('flower cat cat dog flower dog'); //=> 3




//Create a function that takes an array as an argument and returns an new array containing all of the array elements that appears twice
// function appearTwice(array) {
//   let newArray = [];
//   let obj = {};

//   for (let i = 0; i < array.length; i++) {
//     if (!obj[array[i]]) {
//       obj[array[i]] = 0;
//     }
//     obj[array[i]] += 1;
//   }
//   console.log(obj);

//   let entries = Object.entries(obj);
//   console.log(entries);
  
//   for (let [key, value] of Object.entries(obj)) {
//     if (value === 2) {
//       newArray.push(key);
//     }
//   }
  
//   console.log(newArray);
//   return newArray;
// }

// appearTwice([1, 2, undefined, 'hello', 2, undefined]); //=> [2, undefined];




//>>>>>SORTING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Create a function that takes an array as an argument and returns the same array with all elements sorted in alphabetical order.
// function sorting(arrSort) {
//   arrSort.sort();
//   console.log(arrSort);
// }

// sorting(['a', 'd', 'a', 'b']); //=> ['a', 'a', 'b', 'd'];
// sorting(['banana', 'apple', 'pear']); //=> ['apple', 'banana', 'pear']




//a function that takes an array as an argument and returns the same array with all elements sorted in descending order.
// function sorting(arrayNums) {
//   arrayNums.sort( (a, b) => b - a);

//   console.log(arrayNums);
// }

// sorting([3, 5, 1, 2, 11, 456]); //=> [456,11,5,3,2,1];




//Create a function that takes an array of strings as an argument and returns the same array with all elements sorted according to length of the string in ascending order. 
// function sortingLength(stringArray) {
//   stringArray.sort((wordA, wordB) => wordA.length - wordB.length);
//   console.log(stringArray);
// }

// sortingLength(['o', 'hello', 'llo', 'ello','lo' ]); // => ['o', 'lo', 'llo', 'ello', 'hello']




//function that sorts elements according to length of the string in alphabetical order
//  NOT WORKING !!!!!!!!!!!!!

// function sortingAlpha(stringArr) {

//   //sorts by lengths and sort 
//   stringArr.sort((wordA, wordB) => wordA.length - wordB.length) || wordA.toLowerCase().localeCompare(wordB.toLowerCase());
//   console.log(stringArr); // [ 'A', 'c', 'C', 'aB', 'Ab', 'goo' ]

//   //need to sort by alphabetical 
//   //how do you deal with case-insensitive without affecting original array elements?

  
//   //console.log(stringArr);
  
// }

// sortingAlpha(['goo', 'A', 'aB', 'Ab', 'c', 'C']); // => ['A', 'aB', 'Ab', 'c', 'C', 'goo']




// //Create a function that takes an array of objects as argument and return the same array with all the elements sorted according to it's value in ascending order

//  function sortingArray(object1) {
    
//   object1.sort((a, b) => a.a - b.a);

//   console.log(object1);
// }
// sortingArray([{a: 1}, {a: 0}, {a : 3}]); //=> [{a:0}, {a:1}, {a:3}];




// //Create a function that takes a multidimensional array as an argument and returns the same array sorted according to the sum of elements of inner arrays.

// function sortMulti(arraySums) {

//   const sorted = arraySums.sort((a, b) => a.reduce((sum, currentValue) => sum + currentValue, 0) - b.reduce((sum, currentValue) => sum + currentValue, 0));

//   console.log(sorted);
// }

// sortMulti([[1,2,3], [0,1], [2,1]]); //=> [[0,1], [2,1], [1,2,3]]




//>>>>>SUB-STRINGS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//function that takes a string as an argument and returns an array with all leading sub-strings of that string
// function allLeadSubstr(stringToBreak) {
//   let arrSplit = stringToBreak.split('');
//   let returnArr = [];

//   let segment = '';
//   for (let i = 0; i < arrSplit.length; i++) {
//     segment += arrSplit[i];
//     console.log(segment);
//     returnArr.push(segment);
//   }

//   console.log(returnArr);
// }
 
// allLeadSubstr('abcd'); // => ['a', 'ab', 'abc', 'abcd'];




//Create a function that takes a string as an argument and returns an array with all leading sub-strings of that string that are 3 letters or longer.
// function allLeadSubstr(inputStr) {

//   let word = inputStr.substring(0, 2);
//   let splitArr = [];
//   console.log(word);

//   for (let i = 2; i < inputStr.length; i++) {
//     splitArr.push(word += inputStr[i]);
//   }
  
//   console.log(splitArr);
// }

// allLeadSubstr('abcdef'); //=> ['abc', 'abcd', 'abcde', 'abcdef'];




//Create a function that takes a string as an argument and returns an array with all leading sub-strings of that string that are shorter than 5 letters, starting from the longest to the shortest
// function leadingSubstr(inputText) {

//   let slashedWord = inputText.slice(0, 5).split('');
//   let length = slashedWord.length;
//   console.log(slashedWord);
//   let retArray = [];

//   for (let i = 0; i < length - 1; i++) {
//     slashedWord.pop();

//     retArray.push(slashedWord.join(''));
//   }

//   console.log(retArray);
// }

// leadingSubstr('abcdefg'); //=> ['abcd', 'abc', 'ab', 'a'];





// //Create a function that takes a string as an argument and returns an array with all the sub-strings of given string.
// function allSubstr(letters) {
//   let subStrArr = [];
//   let lettersArr = [];

//   let element = '';

//   while (true) {

//     //iterates through each index of the string and pushes substring to array for output
//     for (let i = 0; i < letters.length; i++) {
//       element += letters[i];
//       if (element.length === 3) {
//         subStrArr.push(element);
//       }
     
//     }
    
//     //splits the string into an array so that the first element can be removed, then rejoins the array as a string
//     lettersArr = letters.split('');
//     lettersArr.shift();
//     letters = lettersArr.join('');

//     //re-sets the value of element so that the next substring can be evaluated once the first element is removed
//     element  = '';

//     //condition to break out of the loop
//     if (letters.length < 1) {
//       console.log(subStrArr);
//       return;
//     }
//   }
// }

// allSubstr('abcd'); //=> ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']




//>>>>>PLAYING WITH WORDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Anagram
// //function that takes two strings as arguments and returns a boolean value of two words are anagrams and false if they are not anagrams.
// function isAnagram(str1, str2) {
//   str1 = str1.toLowerCase().split('').sort().join('');
//   str2 = str2.toLowerCase().split('').sort().join('');
//   return str1 === str2;
// }

// console.log(isAnagram('aba', 'Aab')); // true
// console.log(isAnagram('aba', 'aa')); //false




// Pangram
// function that checks if string contains all 26 letters of the alphabet
// function isPanagram(phrase) {
  //const alphaObj = {};

  //want to create an object for each letter of the alphabet with count of 0 for initial key's value
  // for (let i = 97; i < 123; i++) {
  //   Object.defineProperty(alphaObj, 'letter', {
  //     value: String.fromCharCode(i),
  //     writable: 0
  //   });

  //   console.log(String.fromCharCode(i));
  //   console.log(alphaObj.letter);
  // }

//   //can't create object so I have a nested array for each letter of the alphabet
//   const alphaArr = [];

//   //loop that iterates through each letter of the alphabet and pushes character and value of 0 to alphaArr
//   for (let i = 97; i < 123; i++) {
//     let charObj = {};

//     alphaArr.push([String.fromCharCode(i), 0]);
//   }

//   //loop that looks at each letter of the input string 
//   for (let j = 0; j < phrase.length; j++) {
    
//     //loop that iterates through alphaArr array and counts how many times each letter occurs
//     for (let char = 0; char < alphaArr.length; char++) {
//       if (phrase[j].toLowerCase() === alphaArr[char][0]) {
//         alphaArr[char][1] += 1;
//         continue;
//       }
//     }
//   }

//   //prints updated totals for alphabet characters based on amount of times each letter occured in input string
//   console.log(alphaArr);

//   //for loop that loops through alphaArr and checks if any letter count === 0
//   for (let k = 0; k < alphaArr.length; k++) {
//     if (alphaArr[k][1] === 0) {
//       console.log('this is not a panagram.');
//       return false;
//     }
//   }
  
//   console.log('this is a panagram!')
//   return true;
// }

// isPanagram("The quick brown fox jumped over the lazy sleeping dog,"); //true
// isPanagram('ab'); //false




// function isIsogram(inputPhrase) {
//   const alphaArr = [];

//     //loop that iterates through each letter of the alphabet and pushes character and value of 0 to alphaArr
//     for (let i = 97; i < 123; i++) {
//       let charObj = {};
  
//       alphaArr.push([String.fromCharCode(i), 0]);
//     }
  
//     //loop that looks at each letter of the input string 
//     for (let j = 0; j < inputPhrase.length; j++) {
      
//       //loop that iterates through alphaArr array and counts how many times each letter occurs
//       for (let char = 0; char < alphaArr.length; char++) {
//         if (inputPhrase[j].toLowerCase() === alphaArr[char][0]) {
//           alphaArr[char][1] += 1;
//           continue;
//         }
//       }
//     }
  
//     //prints updated totals for alphabet characters based on amount of times each letter occured in input string
//     console.log(alphaArr);
  
//     //for loop that loops through alphaArr and checks if any letter count === 0
//     for (let k = 0; k < alphaArr.length; k++) {
//       if (alphaArr[k][1] > 1) {
//         console.log('this is not a isogram.');
//         return false;
//       }
//     }
    
//     console.log('this is a isogram!')
//     return true;
// }

// isIsogram('dermatoglyphics'); // true
// isIsogram('alabama'); //false





//>>>>>STRINGS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//fx that checks if it's in alphabetical order
// function isAlphabetical(str1) {
//   return str1 === str1.split('').sort().join('');
// }

// console.log(isAlphabetical('abcdefg')); //true
// console.log(isAlphabetical('adegttksn')); //false





//checking if a string has only vowels / consonants / numbers / upper or lowercase / any specific character
// function hasOnlyVowels(stringCheck) {

//   for (let i = 0; i < stringCheck.length; i++) {
//     if (stringCheck[i] === 'a' || stringCheck[i] === 'e' || stringCheck[i] === 'i' || stringCheck[i] === 'o' || stringCheck[i] === 'u') {
//       continue;
//     }
//     else {
//       console.log('false');
//       return false;
//     }
//   }
//   console.log('true');
// }

// hasOnlyVowels('aaeuiooae'); //true
// hasOnlyVowels('tgbhrrf_00&'); //false





//a function that takes a string as an argument and returns an object containing strings segregated as follows: numbers, upper case letters, lower case letters, other symbols.
// function segregate(stringToSeg) {
//   let stringArr = stringToSeg.split('').sort();
//   //console.log(stringArr);

//   const segObj = {
//     lettersUpper: '',
//     lettersLower: '',
//     numbers: '',
//     otherCharacters: ''
//   };

//  // console.log(segObj);

//     for (let i = 0; i < stringArr.length; i++) {
//       if (stringArr[i].charCodeAt() >= 65 && stringArr[i].charCodeAt() < 91) {
//         segObj.lettersUpper += stringArr[i];
//       }
//       else if (stringArr[i].charCodeAt() >= 97 && stringArr[i].charCodeAt() < 123) {
//         segObj.lettersLower += stringArr[i];
//       }
//       else if (stringArr[i].charCodeAt() >= 48 && stringArr[i].charCodeAt() < 58) {
//         segObj.numbers += String(stringArr[i]);
//       }
//       else {
//         segObj.otherCharacters += String(stringArr[i]);
//       }
//     }
    
//     console.log(segObj);
// }

// segregate('aad559 $%,');
// segregate('11AB'); //{lettersUpper: 'AB', lettersLower: '', numbers: '11', other characters: '' }




//Create a function that takes a string as an argument and return a boolean, true if all characters in the string are the same characters and false otherwise
// function haveSameChar(stringI) {
//   let string = stringI.split('');
  
//   for (let i = 0; i < string.length - 1; i++) {
//     if (string[i] !== string[i + 1]) {
//       console.log('false');
//       return false;
//     }
//   }
//   console.log('true');
//   return true;
// }

// haveSameChar('aaaaa') //true
// haveSameChar('cccb9') //false




//>>>>>EXTRACTING AND REMOVING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Create a function that takes a string as an argument and return an array of words that exist in that strings and begins with letter a
// function extractStr(string) {
//   let stringArr = string.split(' ');
//   let arr = [];

//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i].startsWith('a')) {
//       arr.push(stringArr[i]);
//     }
//   }
//   console.log(arr);
// }

// extractStr('abcd bcd aa'); //[abcd, aa]




// //Create a function that takes two strings as arguments & return an array of sub strings that are the same as the second argument.
// function extractStr(str1, str2) {
//   let len2 = str2.length; 
//   let arr = [];

//   while (true) {
//     let count = 0;
//     for (let i = 0; i < len2; i++) {
      
//       if (str1[i] === str2[i]) {
//         count += 1;
//       }
//       else {
//         str1 = str1.substring(1);
//       }

//       if (count === len2) {
//         arr.push(str2);
//         str1 = str1.substring(len2);
//         break;
//       }
//     }

//     if (str1.length === 1) {
//       console.log(arr);
//       return;
//     }
//   }
// }

// extractStr('abcdefabcdefabcdef abcdefg', 'abc'); //['abc', 'abc', 'abc', 'abc'];




// //a function that takes an array as argument and returns  a new array with all the elements that appears more than once removed.
// function removeDuplicate(arrNums) {
//   arrNums.sort();
//   let arrNums2 = []
//   for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] !== arrNums[i + 1]) {
//       arrNums2.push(arrNums[i]);
//     }
//     else {
//       continue;
//     }
//   }
//   console.log(arrNums2);

// }

// removeDuplicate([1, 2, 3, 5, 2, 1, 5, 2 ]); //=> [1, 2, 3, 5];




// //a function that takes a string and a number as arguments and return an array containing all the characters that appears in the string as many times as the second argument.
// function extractChar(str1, num) {

//   let numObj = {};
//   let numArr = [];
//   for (let i = 0; i < str1.length; i++) {
    
//     if (!numObj[str1[i]]) {
//       numObj[str1[i]] = 0;
//     }
//     numObj[str1[i]] += 1;
//   }

//   for (let [key, value] of Object.entries(numObj)) {
//     //console.log(`${key}: ${value}`);
//     if (value === num) {
//       for (let j = 0; j < num; j++) {
//         numArr.push(key);
//       }
//     }
//   }
//   console.log(numArr);
// }

// extractChar('abcabcdefra', 2); // ['b', 'b', 'c', 'c'];




// //a function that takes two arguments: an array with elements and another element, which can be any primitive data type, and return the same array with the second argument of the function, removed from that array.
// function removeEl(array, number) {
//   let arr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       array.splice(i, 1);
//       console.log(array)
// ;    }
//   }
//   console.log(array)
//   return array;
// }

// let arr = [1,2,3];
// let arr3 = removeEl(arr, 2); //[1, 3]
// console.log(arr === arr3); //true




//>>>>>TRANSFORMATION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// //a function that takes a string as an argument and return a new string with every second letter changed to upper case. 
// function toUpper(string) {

//   let newString = '';

//   for (let i = 0; i < string.length; i++) {
//     if (i % 2 !== 0) {
//       newString += string[i].toUpperCase();
//     }
//     else {
//       newString += string[i];
//     }
//   }
//   console.log(newString);
// }

// toUpper('abcdef'); //'aBcDeF'




// //a function that takes two strings as arguments. The second string represents a character that is supposed to be removed from the string.
// function removeIt(string, char) {
//   let stringArr = string.split('');
//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i] === char) {
//       stringArr.splice(i, 1);
//     }
//   }
//   console.log(stringArr.join(''));
// }

// removeIt('abcdefghd', 'd'); //'abcefgh'



// Create a function that takes three strings as arguments and return a string with all the characters that are the same as the second argument replaced with the thirds argument character. For example:
// function replaceIt(str1, str2, str3) {

//   let retStr = '';
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] === str2) {
//       retStr += str3
//     } 
//     else {
//       retStr += str1[i];
//     }
//   }
//     console.log(retStr);
// }
// replaceIt('abcdefgaa', 'a', '00'); '00bcdefg0000'





// //a function that takes a string as an argument and a number and console log the string rotated by one to the right as many times as the second argument. 
// function rotate(str, num) {
//   let strArr = str.split('');
//   for (let i = 0; i < num; i++) {
//     strArr.shift();
//     strArr.push(str[i]);
//     console.log(strArr.join(''));
//   }
// }

// rotate('abcdefg', 3);
// //'bcdefga'
// //'cdefgab'
// //'defgabc'




// //Create a function that takes a two-dimensional array and transforms it into a one-dimensional array. 
// function transformIt(nestedArr) {
//   let newArr = [].concat(...nestedArr);
//   console.log(newArr);
// }

// transformIt([[1], [2], [3]]); // [1,2,3]




//>>>>>FINDING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>







//>>>>>COMPARING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//>>>>>>7/12 TA Led Study Session>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// console.log('2' + '2'); //22, in case of strings attempts to perform string concatenation
// console.log('2' - '2'); //0 attempts to coerce strings to numbers
// console.log('2' * '2'); //4
// console.log('2' * 'A'); //NaN

// //how does the && and || operator work? When do they short-circuit? && short circuits if it finds a truthy value, || short-circutis when it finds a falsy value
// console.log(1 < 2 && 3 < 4);             //true
// console.log(1 > 2 || 3 > 4);             //false
// console.log(1 > 2 && undefined.length);  //false
// console.log(1 < 2 || undefined.length);  //true
// console.log(1 > 2 || undefined.length);  //type error cannot read properties of undefined
// console.log(2 && 3);                     //returns 3, the last operand evaluated


//returns false because these arrays are in different locations in memory
// let pets = ["dog", "fish", "parrot"];
// let myPets = pets;
// console.log(myPets === pets);
// console.log(myPets == ["dog", "fish", "parrot"]);


// //variable scoping concept, b is accessible inside nested function bc it's a global varible, a is not accessible
// let b = 2;

// function foo(a) {
//   a = b;
//   return a;
// }

// console.log(foo(5));//logs 2
// console.log(b);     //logs 2
// console.log(a);     //type error

// let animal = "dog";

// const speak = animal => {
//   if (animal) {
//     console.log("Bark");
//   } else {
//     console.log("Meow");
//   }
// }

// speak(); 

//logs 'Meow' because we're not passing any arguments to the function (variable shadowing)
// //undefined is value of animal passed to this fx which is falsy, JS initializes parameter as undefinied which is falsy


// let name = "nina";

// function outer() {
//   let name = "jill";

//   function capitalize() {
//     return name[0].toUpperCase() + name.slice(1);
//   }

//   return capitalize();
// }

// let capitalizedName = outer(); 
// console.log(capitalizedName); //Jill
// console.log(name); //nina


// let greeting = ["Hello"];

// const foo = arr => {
//   arr = arr.push("World!");
//   return arr;
// }

// console.log(foo(greeting));     //2
// console.log(greeting);          //['hello', 'world']

// const a = 'Hello';

// if (true) {
//   a = a.concat(" , world!");
// }

// console.log(a);

// // // got this wrong 
// const a = 'Hello';          //primitives can not be mutated

// if (true) {
//   a.concat(" , world!");    //.concat returns a new string
// } 

// console.log(a);



// //harder, variable shadowing and pass by reference(#1)
// let pets = {
//   jerry: {species: "cat", age: 3},
//   luna: {species: "dog", age: 5},
//   goldin: {species: "fish", age: 1}
// };

// function flattenObj(animals) {
//   //variable shadowing
//   let pets = Object.keys(animals);
//   console.log(pets);


//   for (let idx in pets) {
//     //pass by reference
//     animals[pets[idx]] = animals[pets[idx]].species;
//   }

//   // for (let currPet of pets){
//   //   animals[currPet] = animals[currPet].species;
//   // }
// }

// flattenObj(pets);
// console.log(pets);

