const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: '  ',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise(function (resolve) {
    resolve(persons.find(person => person.id === id))
  });
}

console.log(fetchPersonById(1));
console.log(fetchPersonById(2));
console.log(fetchPersonById(3));



