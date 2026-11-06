// Independent lesson examples. Each block isolates variables like numbers and people.

// ====================================================================
// Array.prototype.splice()
// ====================================================================
{
//SPLICE
//                0         1         2         3         4            5
const names = ['Felipe', 'Penha', 'Hoeppner', 'Pedro', 'Antonio', 'Beatriz'];


const removed = names.splice(4, 1); // Returns an array containing the removed elements
const removedWithNegativeIndex =names.splice(-2, 2)

names.splice(-1, 1); // Like pop: removes one element starting at the last index
names.splice(names.length, 0, 'Luiz', 'Felipi'); // Simulates push
names.splice(0,0, 'Luiz', 'Ótavio'); // Equivalent to unshift

console.log(names, removed);
}

// ====================================================================
// Array.prototype.concat() and spread syntax
// ====================================================================
{
// ARRAY CONCATENATION
const nums1 = [1,2,3];
const nums2 = [4,5,6];
const nums3 = nums1.concat(nums2, [7,8,9], 'Luiz');// Concatenates arrays and returns a new array

const nums4 = [...nums1,...nums2];
}

// ====================================================================
// Array.prototype.filter()
// ====================================================================
{
// FILTER - returns an array with the same number of elements or fewer 
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// function callBackFilter(value){
//     return (value > 10)
// }
const filteredNumbers = numbers.filter(value => value > 10);// Returns true or false

console.log(filteredNumbers);

const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 },
];


// const test = people.filter(function(obj){
//     if (obj.name.length > 3){
//         return true
//     }else{
//         return false
//     } 
// });
const test = people.filter(obj => obj.name.length > 2);
console.log('hi', test);


const peopleWithLongNames = people.filter(obj => obj.name.length >= 5);
const peopleOverFifty = people.filter(obj => obj.age > 50);
const peopleWhoseNamesEndWithA = people.filter(obj => obj.name.toLowerCase().endsWith('a'));

console.log(peopleWithLongNames);
console.log(peopleOverFifty);
console.log(peopleWhoseNamesEndWithA);
}

// ====================================================================
// Array.prototype.map()
// ====================================================================
{
// MAP
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 },
];

//MAP
// const doubledNumbers = numbers.map(function(value){
//     return value *2;
// });
const doubledNumbers = numbers.map(value => value *2);
console.log(doubledNumbers);

const peopleNames = people.map(obj => obj.name);

const peopleAges = people.map(obj => ({age: obj.age}));

const peopleWithIds = people.map(function(obj, index){
    const newObj = {...obj}; // Creates a copy instead of referencing the original object (unfinished note) 
    newObj.id = index + 1;
    return obj;
});
console.log(peopleNames, peopleAges);
console.log(peopleWithIds);
}

// ====================================================================
// Array.prototype.reduce() (unfinished lesson)
// ====================================================================
{
// REDUCE
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

//REDUCE
const total = numbers.reduce(function(accumulator, value, index, array){
    
}, 0);// Initial value
}
