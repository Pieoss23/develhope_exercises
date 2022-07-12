function sum(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));