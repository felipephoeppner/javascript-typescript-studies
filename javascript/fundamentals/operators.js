/*
Arithmetic operators
+ Addition / Concatenation
- / * 
** power
% remainder
Increment = ++
Decrement = --

*/ 

const num1 = 5;
const num2 = 10;
const step = 50;
let counter = 1


console.log(num1 ** num2); // Exponentiation
console.log(num2%num1); //remainder

counter++; //Increment - 2 / Shows the value and then increments it
++counter; //Increment - 3 / Increments the value and then shows it


console.log(counter++); // Shows 3
console.log(counter); // Shows 4
console.log(++counter); // Shows 5

// Assignment operator
counter += step;
console.log(counter); // Shows 55

counter *= step;
console.log(counter); // Shows 2750

const numString = 'Test';
console.log(num1+numString); // Shows 5Test

console.log(typeof(numString), num1*numString); // Shows NaN - Not a Number

const numString2 = parseInt('5');
console.log(typeof(numString2), num1*numString2); // Shows 25

const numString3 = parseFloat('5.2');
console.log(typeof(numString3),num1,numString3, num1*numString3); // Shows 26

const numString4 = Number('5.244');
console.log(typeof(numString4), numString4); //Shows 5,244
