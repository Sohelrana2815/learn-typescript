{
  // Access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // Balance modify
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    // If you want _balance prop use protected rather then private
    test() {
      this._balance;
    }
  }

  const poorAccount = new BankAccount(1, "Mr.gorib", 10);
  //   poorAccount.balance = 0;

  poorAccount.addDeposit(10);
  const myBalance = poorAccount.getBalance();
  console.log(myBalance);

  //
}
