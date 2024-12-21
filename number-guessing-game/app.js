#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
async function playGame() {
    console.log(chalk.magenta("Welcome to the Number Guessing Game!"));
    console.log(chalk.cyan(`Guess a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`));
    const systemGeneratedNo = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
    try {
        const answer = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: "Enter your guess:",
                validate: (input) => {
                    if (isNaN(input) || input < MIN_NUMBER || input > MAX_NUMBER) {
                        return `Please enter a valid number between ${MIN_NUMBER} and ${MAX_NUMBER}.`;
                    }
                    return true;
                }
            }
        ]);
        const { userGuess } = answer;
        if (userGuess === systemGeneratedNo) {
            console.log(chalk.green("Congratulations! Your guess is correct. You win!"));
        }
        else {
            console.log(chalk.red(`Sorry, that's not correct. The number was ${systemGeneratedNo}.`));
            console.log(chalk.yellow("Better luck next time!"));
        }
    }
    catch (error) {
        console.error(chalk.red("An error occurred:"), error);
    }
}
playGame();
