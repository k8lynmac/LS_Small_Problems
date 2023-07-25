//Pass-By-Reference 
function changeArr(array) {
  array.push('reference');
  return array;
}

console.log(changeArr(['pass-by']));



//Pass-By-Value
function showImmutability(primitiveVar) {
  primitiveVar = 'Hi';
}

let string = 'Hello';
showImmutability(string);
console.log(string);



//Variable Shadowing
let number = 20 

function squared(digits) {
  let number = 3;
  return number ** 2;
}

console.log(squared(number));
console.log(number);




//Side Effects
//if it's internal change, does it count as a side effect?



//Primitive versus Object Data Types




//Variable Scoping and Nested Functions



//First Class Functions
//functions can be passed as arguments, assigned to a variable, and returned from a function call 


//JS built-in Array methods
  //.push()


  //.map()



  //.reduce()



  //.slice()


  //.splice()



//Spread Syntax



//For/In Loop



//For/Of Loop



//Explicit versus Implicit Type Coercion
