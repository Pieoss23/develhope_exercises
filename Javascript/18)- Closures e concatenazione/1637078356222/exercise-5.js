function memoize(fn) {
  let cache = {};
  return function(n){
      if (n in cache) {
          return `fetching from cache for ${cache[n]}`
          
      } else {
          let amount = fn(n);
          cache[n] = amount;
          return amount;
      }
  };
};

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));