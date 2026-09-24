function atmWithdrawal(balance, withdrawAmount) {
    let currentBalance = balance;

    while (true) {
        if (currentBalance < withdrawAmount) {
            console.log(`Insufficient balance! Remaining: ₹${currentBalance}, Requested: ₹${withdrawAmount}.`);
            break;
        }
        currentBalance -= withdrawAmount;
        console.log(`Withdrawn: ₹${withdrawAmount}. Remaining Balance: ₹${currentBalance}`);
    }
}

atmWithdrawal(1000, 300);