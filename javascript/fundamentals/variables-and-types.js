// These lesson blocks are isolated to avoid naming collisions when run together.

// ====================================================================
// Variable declarations (var, let, const)
// ====================================================================
{
// JavaScript is dynamically typed
// var can be redeclared; ES2015 (ES6) introduced let and const
// Avoid declaring variables without let, var, or const; this can create global variables
let name = 'Felipe'; //STRING
let age;
let penhaAge;
penhaAge = 28;

const constantName = 'Penha Constant'; // A const declaration requires an initial value
//constantName = 'Invalid new value'; //TypeError: Assignment to constant variable.

const firstNumber = 5;
const secondNumber = 6;

const calculation = firstNumber * secondNumber;



console.log(`${name} has a cool name`);
console.log(name, `such a cool name`);
console.log(`This person is cool, their name is:`, name,  `they are really cool`); 
console.log(age); // An uninitialized variable has the value undefined
console.log(penhaAge);

console.log( typeof(constantName) );
console.log(typeof firstNumber);
}

// ====================================================================
// JavaScript data types
// ====================================================================
{
//String, number, undefined, null, boolean, symbol

const name = 'Penha'; //String
const name2 = "Penha"; // String
const name3 = `Penha`; //String

const num1 = 10; //Number
const num2 = 10.52; //Number
let studentName; // Undefined: no value has been assigned
const studentLastName = null; // Null: an intentionally empty value, unlike undefined
const approved = true; // Boolean: true or false (logical)

const a = [1,2];
const b = a; // Holds a reference to the same array in memory

console.log(a,b);

b.push(3); // Updating the referenced array affects both variables
console.log(a,b);

console.log(typeof approved, approved);
}

// ====================================================================
// Primitive values and references
// ====================================================================
{
/*
Primitives (immutable) - string, number, boolean, undefined,
null(bigint, symbol)

References (mutable) - array, object, function
*/
let a = 'A';
let b = a;// Copy

console.log(a,b);
a = 'Something else';
console.log(a,b);



let arrayA = [1,2,3];
let arrayB = arrayA;
console.log(arrayA,arrayB);

arrayA.push(4);
console.log(arrayA,arrayB);// Both variables reference the same array in memory

arrayB.pop();
console.log(arrayA,arrayB);// Removing an item affects both references

const person = {
    firstName: 'luiz',
    lastName:'otavio'
};

const referenceValue = person;// Assigns the reference rather than a separate copy
const independentPerson = {...person};// Creates a shallow copy instead of sharing the same object reference
}
