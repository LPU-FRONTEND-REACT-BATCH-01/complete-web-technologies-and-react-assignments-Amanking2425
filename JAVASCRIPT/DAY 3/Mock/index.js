let bankAccount = {
    balance: 0,
    transaction: []
};

function deposit(amount) {
    if (amount > 0) {
        bankAccount.balance += amount;
        bankAccount.transaction.push("Deposit: +" + amount);

        console.log("Balance updated: " + bankAccount.balance);
        console.log("Transaction Stored: +" + amount);
    } else {
        console.log("Amount must be greater than 0");
    }
}

function withdraw(amount) {
    if (amount > 0 && amount <= 10000 && amount <= bankAccount.balance) {
        if (bankAccount.balance - amount <= 500) {
            console.log("Transaction can't be done because bank must have 500");
        } else {
            bankAccount.balance -= amount;
            bankAccount.transaction.push("Withdraw: -" + amount);

            console.log("Balance after withdraw: " + bankAccount.balance);
            console.log("Transaction Stored: -" + amount);
        }
    } else {
        console.log("Invalid  amount");
    }
}

function getBalance() {
    return bankAccount.balance;
}

function getTransaction() {
    return bankAccount.transaction;
}

deposit(2000);
withdraw(2500);


console.log("Current Balance:", getBalance());
console.log("Transaction History:", getTransaction());