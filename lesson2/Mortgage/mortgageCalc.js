//build a mortgage calculator
//need loan amount, APR, and loan duration to calculate monthly interest rate and loan duration in months 

// let rlsync = require('readline-sync');
// let loanAmount = Number(rlsync.question('What is the loan amount? '));
// let APR = (1/100) * Number(rlsync.question('What is the Annual Percentage Rate? (i.e. for 3.5%), enter 3.5 '));
// //convert APR to monthly interest rate
// let monthlyIntRate = APR/12;
// let years = Number(rlsync.question('What is the loan duration in years? '));
// //convert years to months
// let months = years * 12;

// let monthlyPayment = loanAmount * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-months))));

// console.log(`Monthly payment is $${monthlyPayment.toFixed(2)}`);


function foo1(a) {
  return 2 * a;
}

let foo2 = function(a) {
  return 2 * a;
};

const foo3 = a => 2 * a;

// create a random integer between 0 and 9
let randomNumber = Math.floor(10 * Math.random());

console.log(foo1(randomNumber));
console.log(foo2(randomNumber));
console.log(foo3(randomNumber));