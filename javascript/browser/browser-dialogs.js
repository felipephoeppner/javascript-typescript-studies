alert('Nice message!');
let confirmation = confirm('Are you sure about that?');
let name = prompt('What is your name?');

let num1 = Number(prompt('Enter number 1'));
let num2 = Number(prompt('Enter number 2'));
//let result = num1+num2;

console.log(confirmation, name);
console.log(num1,num2, 'result is:', num1+num2);

alert(`The result was: ${num1+num2}`);
