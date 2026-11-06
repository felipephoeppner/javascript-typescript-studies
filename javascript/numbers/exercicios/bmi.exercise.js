/*
Luiz Otávio Miranda is 30 years old and weighs 84 kg
is 1.8 m tall and has a BMI of 25.925925925925924
Luiz Otávio was born in 1980
*/

const firstName = 'Felipe';
const lastName = 'Hoeppner';
const age = 28;
const weight = 95;
const heightMeters = 1.69;
let bmi; // weight / (height * height)
let birthYear = 2026 - age;
bmi = weight / (heightMeters*heightMeters);

console.log(`${firstName} ${lastName} is ${age} years old, weighs ${weight} kg, is ${heightMeters} m tall, and has a BMI of ${bmi}; age: ${age}`)
