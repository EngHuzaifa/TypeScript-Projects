#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta("Let's start number gues6sing game"));
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10 ? "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs');
if (userGuess === systemGeneratedNo) {
    console.log(chalk.blue("Yeaaaa Your answer is correct \n You Win!"));
}
else {
    console.log(chalk.blueBright("Please try again Better luck next time!"));
}
