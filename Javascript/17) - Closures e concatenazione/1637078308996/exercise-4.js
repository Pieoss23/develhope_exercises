
function calculate(amount) {
  return {
    add: function(n) {
      amount += n;
      return this;
    },

    multiply: function(n) {
      amount *= n;
      return this;
    },

    sub: function(n) {
      amount -= n;
      return this;
    },

    divide: function(n) {
      amount /= n;
      return this;
    },

    printResult: function() {
      console.log(amount);
    }
  }
};

const calculator = calculate(0);
calculator
  .add(2)
  .add(4)
  .multiply(3)
  .sub(1)
  .sub(3)
  .divide(2)
  .printResult(); // Il risultato sarà: 7