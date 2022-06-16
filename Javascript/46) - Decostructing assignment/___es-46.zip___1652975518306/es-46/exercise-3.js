// // function isAdult(person) {
// //   return person.age >= 18;
// // }
// // let adult = [];
// // isAdult() = adult;
// const getAge = ({adult = adult.age > 18} = []) => adult;
// // function isAdult({age}) {
// //   return age >= 18;
// // };
// console.log(getAge({ adult: "thing" })) // "thing"
// console.log(getAge({ adult: "bar" }))    // "default"

// const person = {
//   id: 1,
//   firstName: 'Mario',
//   lastName: 'Rossi',
//   age: 25
// };

// // // const person = {};
// // // const {id = 1, firstName = 'Mario', lastName = 'Rossi', age = 25} = person;

// console.log(getAge());

function isAdult({age}) {
  return age >= 18;
}

const person = {};
const {id = 1, firstName = 'Mario', lastName = 'Rossi', age = 10} = person;

console.log(isAdult(person));

