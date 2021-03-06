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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

// function fetchPersonById(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const person = persons.find(person => person.id === id);
//       if (person) {
//         return resolve(person);
//       }
//       return reject(`Person with id: ${id} doesn't exist`);
//     }, 1000);
//   });
// }

const fetchPersonById = (id) =>
  new Promise((resolve) => resolve(persons.find((person) => person.id === id)));

const fetchJobById = (person) =>
new Promise ((resolve) => resolve( jobs.find((job) => job.id === person.id).jobTitle));
 

fetchPersonById(1)
.then((person) =>
  console.log(`${person.firstName} ${person.lastName} ${jobs.person}`)
);
