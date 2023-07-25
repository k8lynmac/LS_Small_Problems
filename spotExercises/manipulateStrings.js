/** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
const obj = { text: "Remove occurances of the letter e after the word 'letter' in this sentence" }
Object.freeze(obj);

/** for loop - function name: forSolution */ 
// function forSolution(textObject) {
//   let sentence = Object.values(textObject)[0];
//   let sentenceBefore = sentence.slice(0, sentence.indexOf('in'));
//   let sentenceAfter = sentence.slice(sentence.indexOf('in'), sentence.length);
//   console.log(sentenceBefore);
//   console.log(sentenceAfter);

//   let endingString = '';
//   for (let i = 0; i < sentenceAfter.length; i++) {
//     if (sentenceAfter[i] !== 'e') {
//       endingString += sentenceAfter[i];
//     }
//   }
//   console.log(sentenceBefore + endingString);
// }

// forSolution(obj);



/** while loop - function name: whileSolution */





/** do while loop - function name: doWhileSolution */





/** forEach iteration method  - function name: forEachSolution */
// function forEachSolution(textObject) {
//   let sentence = Object.values(textObject)[0];
//   let sentenceBefore = sentence.slice(0, sentence.indexOf('in'));
//   let sentenceAfter = sentence.slice(sentence.indexOf('in'), sentence.length);
//   let endingString = [];

//   sentenceAfter.split('').forEach(char => {
//     if (char !== 'e') {
//       endingString.push(char);
//     }
//   });

// console.log(sentenceBefore + endingString.join(''));
// }

// forEachSolution(obj);



/** filter iteration method  - function name: 'filterSolution' */
// function filterSolution(textObject) {
//   let sentence = Object.values(textObject)[0];
//   let sentenceBefore = sentence.slice(0, sentence.indexOf('in'));
//   let sentenceAfter = sentence.slice(sentence.indexOf('in'), sentence.length);
//   let endingString = [];

//   sentenceAfter.split('').filter(char => {
//     if (char !== 'e') {
//       endingString.push(char);
//     }
//   });

// console.log(sentenceBefore + endingString.join(''));
// }

// filterSolution(obj);


// map iteration method
// function mapSolution(textObject) {
//   let sentence = Object.values(textObject)[0];
//   let sentenceBefore = sentence.slice(0, sentence.indexOf('in'));
//   let sentenceAfter = sentence.slice(sentence.indexOf('in'), sentence.length);
//   let endingString = [];

//   sentenceAfter.split('').map(char => {
//     if (char !== 'e') {
//       endingString.push(char);
//     }
//   });

// console.log(sentenceBefore + endingString.join(''));
// }

// mapSolution(obj);


// reduce iteration method

function reduceSolution(textObject) {
  let sentence = Object.values(textObject)[0];
  let sentenceBefore = sentence.slice(0, sentence.indexOf('in'));
  let sentenceAfter = sentence.slice(sentence.indexOf('in'), sentence.length);

  let end = sentenceAfter.split('').reduce(
    (array, char) => {
      if (char !== 'e') {
        array.push(char);
      }
      return array;
    }, []);

console.log(sentenceBefore + end.join(''));
}

reduceSolution(obj);