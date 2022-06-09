class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get name() {
    return this.firstName;
  }

  set name(value) {
    return (this.firstName = value);
  }

  get surname() {
    return this.lastName;
  }

  set surname(value) {
    this.lastName = value;
  }

  get ages() {
    return this.age;
  }

  set ages(value) {
    return (this.age = value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);