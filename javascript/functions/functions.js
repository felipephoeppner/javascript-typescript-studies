function greeting(parameter){
    return `Hi, ${parameter}`;
}

function sum(x,y){
    const result = x+y;
    return result;
}

const variable = greeting('Penha');
console.log(variable);

const squareRoot = function(n){
    return n ** 0.5;
}

const squareRootArrow = n => n ** 0.5; // Same as the function above

console.log(sum(1,2));
console.log(sum(3,2));
console.log(sum(5,2));
