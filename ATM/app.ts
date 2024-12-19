import inquirer from "inquirer";
import chalk from "chalk";

// Define a type for user inputs
interface UserInputs {
    userId: string;
    userPin: number;
    accountType: string;
    transactionType: string;
    amount: number;
}


// Define a function to handle the ATM logic
async function runATM() {
    console.log(chalk.bgMagenta.bold("Welcome to the ATM"));

    // Prompt the user for inputs
    const answers: UserInputs = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Kindly enter your ID: ",
            validate: (input: string) => input.trim() !== "" || "ID cannot be empty",
        },
        {
            type: "password",
            name: "userPin",
            message: "Kindly enter your PIN: ",
            validate: (input: string) =>
                input.trim().length === 4 || "PIN must be a 4-digit number",
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Current Account", "Saving Account"],
            message: "Select your account type: ",
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Fast Cash", "Withdraw"],
            message: "Select your transaction type: ",
            when: (answers) => !!answers.accountType,
        },
        {
            type: "list",
            name: "amount",
            choices: [5000, 10000, 15000, 20000],
            message: "Select your amount: ",
            when: (answers) => answers.transactionType === "Fast Cash",
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount: ",
            when: (answers) => answers.transactionType === "Withdraw",
            validate: (input: number) =>
                input > 0 || "Amount must be greater than zero",
        },
    ]);

    // Validate userId and userPin
    if (answers.userId && answers.userPin) {
        const balance: number = Math.floor(Math.random() * 100000); // Generate a random balance
        console.log(chalk.bgBlue(`Your current balance is: ${balance}`));

        const enteredAmount: number = answers.amount;

        if (enteredAmount <= balance) {
            const remainingBalance = balance - enteredAmount;
            console.log(
                chalk.bgGreen(`Transaction successful! Your remaining balance is: ${remainingBalance}`)
            );
        } else {
            console.log(chalk.bgRed("Insufficient balance for the transaction."));
        }
    } else {
        console.log(chalk.bgRed("Invalid credentials. Please try again."));
    }

    console.log(chalk.bgCyan("Thank you for using the ATM!"));
}

// Run the ATM App
runATM().catch((error) => {
    console.error(chalk.bgRed("An error occurred: "), error.message);
});
