// // #1 Cute Angles: decimal degrees to degrees, minutes, seconds 

// function dms(num) {
  
//   //finds whole degree
//   let degree = Math.floor(num);

//   //multiplies decimal part of input number by 60
//   let calc = (num - degree) * 60;

//   //finds decimal part of calculated number -- will be used to find seconds
//   let decimal = calc - Math.floor(calc);

//   //find whole number of calculated numer
//   let minute = calc - decimal;
  
//   //multiply 
//   let second = Math.round(decimal * 60, 1);


//   minute = padZeroes(minute);
//   second = padZeroes(second);

//   console.log(`${degree}\xB0${minute}\'${second}\"`)
// }

// function padZeroes(number) {
//   let numString = String(number);
//   return numString.length < 2 ? ('0' + numString) : numString;
// }

// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// #2. Combining Arrays
// function union(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// const a = 'Hello';

// if (true) {
//   a = a.concat(" , world!");
// }

// console.log(a);

// let greeting = ["Hello"];

// const foo = arr => {
//   arr = arr.concat("world");
//   return arr;
// }

// console.log(foo(greeting));
// console.log(greeting);

function test(primitive) {
  primitive.repeat(3);
  return primitive;
}

console.log(test('subtract'));