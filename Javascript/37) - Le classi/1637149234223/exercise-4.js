class BankAccount{
    
    constructor(amount){
        this.amount = amount; 
    }

    deposit(amount){
        this.amount += amount;
    }
    withdraw(amount){
        this.amount -= amount;
    }
    view(){
        console.log(`Il tuo saldo corrente è: ${this.amount}$`);
    }
}

const bankAccount = new BankAccount(1000);

bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();

