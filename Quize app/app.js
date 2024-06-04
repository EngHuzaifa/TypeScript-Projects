import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import chalkAnimation from 'chalk-animation';
console.log('🥰', chalk.cyan(figlet.textSync("TypeScript Quize !")));
const quize = async () => {
    await inquirer
        .prompt([
        {
            type: "rawlist",
            name: "QUIZE1",
            message: "what is TypeScript primarily used for ? ",
            choices: ["A. Memory Management", "B. Dynamic Typing", "C. Static Typing", "D. Asynchronous operations"],
        },
        {
            type: "rawlist",
            name: "QUIZE2",
            message: "Which of the following is NOT a valid TypeScript data type ? ",
            choices: ["A. void", "B. any", "C. dynamic", "D. tuple"],
        },
        {
            type: "rawlist",
            name: "QUIZE3",
            message: "  How do you denote a variable as readonly in TypeScript ?",
            choices: ["A. const", "B. static", "C. readonly", "D. fixed"],
        },
        {
            type: "rawlist",
            name: "QUIZE4",
            message: "How do you specify that a function does not return anything in TypeScript ? ",
            choices: ["A. function myFunc(): undefined", "B. function myFunc(): void", "C. function myFunc(): null", "D. function myFunc(): None"],
        },
        {
            type: "rawlist",
            name: "QUIZE5",
            message: " How do you define a custom type in TypeScript ? ",
            choices: ["A. interface", "B. typedef", "C. type", "D. Both A and C"],
        },
        {
            type: "rawlist",
            name: "QUIZE6",
            message: " What is the primary purpose of TypeScript interfaces ? ",
            choices: ["A. To create new classes", "B. To describe the shape of an object", "C. To generate HTML templates", "D. To manage asynchronous code"],
        },
        {
            type: "rawlist",
            name: "QUIZE7",
            message: " What is a union type in TypeScript ? ",
            choices: ["A. A type that can be any value", "B. A type that can be one of several types", "C. A type that can be both a string and a number simultaneously", "D. A type that can be an object"],
        }
    ]).then((answers) => {
        if (answers.QUIZE1 === "C. Static Typing") {
            console.log(chalk.magentaBright("Correct Answer"));
        }
        else {
            console.log(chalk.red("Wrong Answer"));
        }
        if (answers.QUIZE2 === "C. Dynamic") {
            console.log(chalk.magentaBright("correct Answer"));
        }
        else {
            console.log(chalk.red("Wrong Answer"));
        }
        if (answers.QUIZE3 === "C. readonly") {
            console.log(chalk.magentaBright("correct Answer"));
        }
        else {
            console.log(chalk.red("Wrong Answer"));
        }
        if (answers.QUIZE4 === "B. function myFunc(): void") {
            console.log(chalk.magentaBright("correct Answer"));
        }
        else {
            console.log(chalk.red("Wrong Answer"));
        }
        if (answers.QUIZE5 === "D. Both A and C") {
            console.log(chalk.magentaBright("correct Answer"));
        }
        else {
            console.log(chalk.red("Wrong Answer"));
        }
        if (answers.QUIZE6 === "B. To describe the shape of an object") {
            console.log(chalk.magentaBright("correct Answer"));
        }
        else {
            console.log(chalk.red("Wrong Answer"));
        }
        if (answers.QUIZE7 === "B. A type that can be one of several types") {
            console.log(chalk.magentaBright("correct Answer"));
        }
        else {
            console.log(chalk.red("Wrong Answer"));
        }
    });
};
let user_ask = true;
async function AskAgian() {
    await inquirer
        .prompt([
        {
            type: "confirm",
            name: "confirm_answer",
            message: "Do you want to play Quiz?",
        }
    ]).then((responce) => {
        if (responce.confirm_answer) {
            user_ask = true;
        }
        else {
            user_ask = false;
            console.log(chalk.greenBright("Thank you for playing Quiz"));
            let animateis = chalkAnimation.rainbow("Goodbye!");
        }
    });
}
do {
    await quize();
    await AskAgian();
} while (user_ask);
