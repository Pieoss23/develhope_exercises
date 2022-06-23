const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      if (person) {
        return resolve(JSON.stringify(person));
      }
      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}
// core here
let person = fetchPersonById(1);
person
.then((personId) => {
  console.log(JSON.parse(personId));
  return fetchPersonById(2);
})
.then((personId) => {
  console.log(JSON.parse(personId));
  return fetchPersonById(3);
}) 
.then((personId) => {
  console.log(JSON.parse(personId));
  return fetchPersonById(4);
})
.catch((error) => {
  console.log(error)
});