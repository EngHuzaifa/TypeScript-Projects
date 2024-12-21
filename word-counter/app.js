import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.green("Welcome to the Word Counter App!"));
async function getSentence() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: "Please enter a sentence to count the words:",
        },
    ]);
    return answers.sentence;
}
async function countWords() {
    const sentence = await getSentence();
    const words = sentence.trim().split(/\s+/);
    console.log(`The sentence contains ${words.length} words.`);
}
countWords();
