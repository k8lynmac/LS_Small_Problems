//#3C.
// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

//#4. 
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length < 4 || dotSeparatedWords.length > 4) {
    return false;
  }
  for (let i = 0; i < dotSeparatedWords.length; i++) {
    let word = dotSeparatedWords[i];
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

console.log(isDotSeparatedIpAddress('10.4.5.11'));
console.log(isDotSeparatedIpAddress('10.4.5.test'));
console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
console.log(isDotSeparatedIpAddress('4.5.5'));


