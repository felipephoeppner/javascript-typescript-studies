class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  speak() {
    console.log(`${this.firstName} ${this.lastName} speaking`);
  }
}

const p1 = new Person("Luiz", "penha");
const p2 = new Person("Maria", "penha");
const p3 = new Person("Juia", "penha");
const p4 = new Person("Penha", "penha");
