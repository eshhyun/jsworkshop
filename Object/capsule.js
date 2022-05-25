class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money){

    if (money >= 0 ){
      this._balance = money;
    } else {
      alert('You cannot set negative number of balance');
    }
  }
  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}

const account1 = new BankAccount('Michael', 10000);
account1.balance = 20000;
console.log(account1.balance) ;
account1.balance = -5000;
console.log(account1.balance) ;