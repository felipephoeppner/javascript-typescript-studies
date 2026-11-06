let varA = "A"; // Will receive the value of B 
let varB = "B"; // Will receive the value of C
let varC = "C"; // Will receive the value of A
let varAux = varA;

// Can also be done with array destructuring
//[varA, varB, varC] = [varB, varC, varA]

varA = varB;
varB = varC;
varC = varAux;

console.log(varA, varB, varC);
