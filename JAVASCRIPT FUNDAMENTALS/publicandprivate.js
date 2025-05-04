class BankAccount{
    #balance = 0; // private field

    deposit(amount){
        this.#balance += amount;
        console.log(`Deposited ${amount}, new balance is ${this.#balance}`);
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log("Insufficient funds");
        }
        else{
            this.#balance -= amount;
            console.log(`Withdrew ${amount}, new balance is ${this.#balance}`);
        }
    }

    balance(){
        console.log(`Current balance is ${this.#balance}`);
    }
}

const account = new BankAccount();
account.deposit(100);
account.deposit(1000);
account.withdraw(500);
account.balance(); 