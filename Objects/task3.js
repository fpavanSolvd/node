const bankAccount = {
  _balance: 1000,

  get formattedBalance() {
    return `$${this._balance}`;
  },

  set balance(value) {
    if (typeof value !== "number") {
      throw new Error("New balance must be a number");
    }
    this._balance = value;
  },
};

bankAccount.transfer = function (targetAccount, amount) {
  if (amount > this._balance) {
    throw new Error("Cannot transfer an amount greater than current balance.");
  }

  this._balance -= amount;
  targetAccount._balance += amount;
};
