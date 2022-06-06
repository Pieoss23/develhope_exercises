const person = {
  get getNames() {
    return `${this.firstName}`;
  },

  set setNames(setName) {
    this.firstName = setName;
  },
  
  get getLastNames() {
    return `${this.lastName}`;
  },
  
  set setLastNames(setLastName) {
    this.lastName = setLastName;
  },

  fullName: function  () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const john = Object.create(person);
john.firstName = 'Jonh';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = "Simon"
simon.lastName = "Collins"

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins