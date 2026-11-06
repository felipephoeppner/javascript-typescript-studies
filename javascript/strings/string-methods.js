
let aString = '"a \\text"';
let myString = 'really good text'

console.log(aString);
console.log(myString[10]);
console.log(myString.charAt(10));
console.log(myString.concat('','on', ', ', 'a beautiful day'));
console.log(myString + 'on a beautiful day');
console.log(`${myString} on a beautiful day`);
console.log(myString.indexOf('good', 3));// Finds the word "good" starting at index 3
console.log(myString.lastIndexOf('good', 3));// Searches backward for the last occurrence
console.log(myString.match(/[a-z]/)); // Regular expression
console.log(myString.search('good')); // Searches the string
console.log(myString.replace('good', 'great')); // Replaces the matching value
console.log(myString.length); // Returns the string length
console.log(myString.slice(-6, -1));
console.log(myString.split(' '));
