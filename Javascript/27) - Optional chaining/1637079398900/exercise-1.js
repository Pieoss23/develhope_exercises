const person = {
  firstName: 'John',
  lastName: 'Doe',
  // address: {
  //   city: 'Trento'
  // },
  // fullName(){
  //   return `${this.firstName} ${this.lastName}`
  // }
};

// if (person.address) {
//   console.log(person?.address?.city); // Argh! Cannot read property 'city' of undefined
// } else {
//   console.log("Argh! Cannot read property 'city' of undefined");
// }

// if (typeof person.fullName === "function"){
//   console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined
// } else {
//   console.log("Argh! Cannot read property 'fullName()' of undefined");
// }

if (person?.address?.city){
  console.log(person?.address?.city); // "Argh! Cannot read property 'city' of undefined"
} else {
  console.log("Argh! Cannot read property 'city' of undefined");
}

if (person?.fullName?.()){
  console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined
} else {
  console.log("Argh! Cannot read property 'fullName()' of undefined") 
}

if(person?.address?.city){
  console.log('esiste');
}