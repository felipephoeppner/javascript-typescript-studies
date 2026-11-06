// These lesson blocks are isolated so original examples can keep their variable names.

// ====================================================================
// Number methods and representations
// ====================================================================
{
//IEEE 754-2008
let num1 = 1000; //number
let num2 = 2000; //number
let num3 = 10.4123123
let num4 = 20.1231233
let num5 = 0.1
let num6 = 0.8

console.log(num1 + num2); // Addition
console.log(num1.toString() + num2); // Concatenation
console.log(num1.toString(2));// Binary representation
console.log(num3.toFixed(2));// Rounding
console.log(Number.isInteger(num1)); //True false

let temp = num1 * 'Hello';
console.log(Number.isNaN(temp));// Checks whether the value is NaN
console.log(num5+num6);
}

// ====================================================================
// Math methods and constants
// ====================================================================
{
let num1 = 9.621654;
let num2 = Math.floor(num1); // Rounds down to 9
let num3 = Math.ceil(num1);
let num4 = Math.round(num1); // Rounds to the nearest integer (10)
let num5 = Math.random();
let num6 = Math.pow(2,10); // Exponentiation
let num7 = 100/0;

console.log(`${num1} and ${num2} and ${num3} and ${num4} and ${num7}`);
}
