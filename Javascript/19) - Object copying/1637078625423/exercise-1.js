const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = 'Simon';
// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

/* Vengono modificati entrambi li oggetti perchè puntano allo stesso spazio di memoria 
è una copia DIPENDENTE del 'padre' person1 */