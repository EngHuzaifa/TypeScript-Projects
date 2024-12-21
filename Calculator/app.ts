#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue('Let\'s start the calculation'));

async function main() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter the first number:",
            validate: (input) => !isNaN(parseFloat(input)) || "Please enter a valid number"
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the second number:",
            validate: (input) => !isNaN(parseFloat(input)) || "Please enter a valid number"
        },
        {
            type: "list",
            name: "operator",
            message: "Choose the operation you want to perform:",
            choices: ["+", "-", "*", "/", "%"]
        },
    ]);

    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);
    let result: number;

    switch (answers.operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : NaN;
            break;
        case "%":
            result = num2 !== 0 ? num1 % num2 : NaN;
            break;
        default:
            console.log(chalk.red("Invalid operation"));
            return;
    }

    if (isNaN(result)) {
        console.log(chalk.red("Error: Division by zero is not allowed"));
    } else {
        console.log(`Result: ${chalk.greenBright(result)}`);
    }
}

let continueCalculation = true;

async function askToContinue() {
    const answer = await inquirer.prompt([
        {
            type: "confirm",
            name: "restart",
            message: "Do you want to perform another calculation?",
            default: false
        },
    ]);

    continueCalculation = answer.restart;
    if (!continueCalculation) {
        console.log(chalk.magenta("Thank you. Bye!"));
    }
}

do {
    await main();
    await askToContinue();
} while (continueCalculation);
