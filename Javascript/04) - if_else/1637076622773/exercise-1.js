

function calculateSalary(role) {
  if (role == 'ceo') {
    return role = '2200€'
  } else if (role == 'manager') {
    return role = '1800€'
  } else if (role == 'cto') {
    return role = '1800€'
  } else if (role == 'developer'){
    return role = '1500€'
  } else {
    return role = '1000€' 
  }
}


const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);