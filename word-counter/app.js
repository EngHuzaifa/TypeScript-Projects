import chalk from "chalk";
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the word : "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(chalk.magentaBright(words));
