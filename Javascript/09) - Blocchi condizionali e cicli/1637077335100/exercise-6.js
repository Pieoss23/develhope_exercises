function getKeys(obj) {
  object = [];

  for (k in obj) {
    object.push(k);
  }
  return object;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);