const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
// const person2 = Object.assign({}, person1);

const person2 = JSON.parse(JSON.stringify(person1));
person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);

/*
JSON.parse() viene utilizzato per analizzare i dati ricevuti come JSON;
deserializza una stringa JSON in un oggetto JavaScript.

JSON.stringify() invece viene utilizzato per creare una stringa JSON da un oggetto o da un array;
serializza un oggetto JavaScript in una stringa JSON.

*/