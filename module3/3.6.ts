{
  // getter and setter

  // getter is like getting something and setter is like set something

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // Balance modify
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // public getBalance() {
    //   return this._balance;
    // }

    get balance() {
      return this._balance;
    }
  }

  const poorPeopleAccount = new BankAccount(1, "Mr. gorib", 50);

  // Use setter

  // No override just send 50 as argument
  poorPeopleAccount.deposit = 50;

  const myBalance = poorPeopleAccount.balance; // We get the _balance like a property
  console.log(myBalance);

  // poorPeopleAccount.balance = 0;

  //   poorPeopleAccount.addDeposit(20);

  //   const myBalance = poorPeopleAccount.getBalance();
  //   console.log(myBalance);

  //
}
