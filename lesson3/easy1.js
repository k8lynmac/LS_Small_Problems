//#3. Determine whether object contains 'Spot'
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Spot'));

//#4. Create new string
// let munstersDescription = "the Munsters are CREEPY and Spooky.";

// let newString = munstersDescription.slice(0, 1).toUpperCase() + munstersDescription.slice(1).toLowerCase();
// console.log(newString);

//#6.
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// let newO = Object.assign(ages, additionalAges);
// console.log(newO);

//#7. 
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

//#8. 
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino');

//#10.
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.slice(0, advice.indexOf('house')));
// // Expected return value:
// // => 'Few things in life are as important as '

const a = ['hello'];

if (true) {
  a.push('world');
}

console.log(a);