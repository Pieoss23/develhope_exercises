class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }
      this.#amount += amount;
    } catch (error) {
      console.log(error);
    }
  }

  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }
      if (this.#amount < amount) {
        throw new Error('You cannot withdraw more than account balance');
      }
      this.#amount -= amount;
    } catch (error) {
      console.log(error);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

<<<<<<< HEAD

=======
>>>>>>> dc8e72388fac62b9a975cc3ec68dcd0b7aec66ec
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();
