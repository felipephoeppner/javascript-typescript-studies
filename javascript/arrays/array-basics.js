//            0123456789
const name = 'Felipe Penha'


// Keep values of a consistent type in an array
const students = ['Penha', 'João', 'Maria'];

students[0] = 'Eduardo';
students[3] = 'New';

// Adds an element to the END of the array - PUSH
students[students.length]='New value'; 
students[students.length]='New value 2'; 
students.push('Pedro');// Adds an element to the end of the array

// Adds an element to the BEGINNING of the array - UNSHIFT
students.unshift('Felipe Second');
students.unshift('Felipe First');

// Removes an element from the END - POP
students.pop();
const removedFromEnd = students.pop();

// Removes an element from the BEGINNING
students.shift();
const removedFromStart = students.shift();

const newStudents = ['First','Felipe', 'Penha', 'Hoeppner', 'Last'];
console.log(newStudents.slice(0,3)); // Shows indexes 0, 1, and 2
console.log(newStudents.slice(0,-1)); // Shows indexes 0, 1, 2, and 3

console.log(typeof students);// Returns "object"
console.log(students instanceof Array); //True

const fullName = "Felipe Penha Hoeppner";
const myArray = fullName.split(' ');
const joinedName = myArray.join(' ');

console.log(myArray);
console.log(joinedName);

console.log(removedFromEnd);
console.log(students.length);// Array length
console.log(students);
console.log(students[2]);
console.log(students[0]);
