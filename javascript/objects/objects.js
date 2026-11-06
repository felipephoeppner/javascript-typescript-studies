//factory
function createPerson(firstName, lastName, age){// Parameter
    return{
        firstName: firstName,
        lastName:lastName,
        age:age
    }// You can also use the shorthand: return { firstName, lastName, age }
}

const person = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    age:25,

    speak(){// A FUNCTION INSIDE AN OBJECT IS A METHOD
        console.log(`${this.firstName}, ${this.lastName} said hi; I am ${this.age}`);
    },
    incrementAge(){
        this.age++;
    }
}
const person1 = createPerson('Luiz', 'Otávio', 25)// Argument

console.log(person1.firstName);
person.speak();
person.incrementAge()
person.speak();
