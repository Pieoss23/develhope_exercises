
const john = {
  firstName: 'John',
  lastName: 'Doe',
  fullName(){
    return this.firstName + ' ' + this.lastName;
  },
  set changeName(newName){
    this.firstName = newName
  }
}

const simon = {
  firstName: 'Simon',
  lastName: 'Collins',
  fullName(){
    return this.firstName + ' ' + this.lastName;
  },
  get changeName(){
    return this.firstName;
  }
}



console.log(john.fullName()); // John Doe
console.log(simon.firstName()); // Simon Collins


