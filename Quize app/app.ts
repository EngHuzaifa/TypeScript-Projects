import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import chalkAnimation from 'chalk-animation';

console.log(chalk.cyan(figlet.textSync("TypeScript Quiz!")));

const quiz = async () => {
    const questions = [
        {
            type: "rawlist",
            name: "QUIZ1",
            message: "What is TypeScript primarily used for?",
            choices: ["A. Memory Management", "B. Dynamic Typing", "C. Static Typing", "D. Asynchronous operations"],
        },
        {
            type: "rawlist",
            name: "QUIZ2",
            message: "Which of the following is NOT a valid TypeScript data type?",
            choices: ["A. void", "B. any", "C. dynamic", "D. tuple"],
        },
        {
            type: "rawlist",
            name: "QUIZ3",
            message: "How do you denote a variable as readonly in TypeScript?",
            choices: ["A. const", "B. static", "C. readonly", "D. fixed"],
        },
        {
            type: "rawlist",
            name: "QUIZ4",
            message: "How do you specify that a function does not return anything in TypeScript?",
            choices: ["A. function myFunc(): undefined", "B. function myFunc(): void", "C. function myFunc(): null", "D. function myFunc(): None"],
        },
        {
            type: "rawlist",
            name: "QUIZ5",
            message: "How do you define a custom type in TypeScript?",
            choices: ["A. interface", "B. typedef", "C. type", "D. Both A and C"],
        },
        {
            type: "rawlist",
            name: "QUIZ6",
            message: "What is the primary purpose of TypeScript interfaces?",
            choices: ["A. To create new classes", "B. To describe the shape of an object", "C. To generate HTML templates", "D. To manage asynchronous code"],
        },
        {
            type: "rawlist",
            name: "QUIZ7",
            message: "What is a union type in TypeScript?",
            choices: ["A. A type that can be any value", "B. A type that can be one of several types", "C. A type that can be both a string and a number simultaneously", "D. A type that can be an object"],
        }
    ];

    const correctAnswers:any = {
        QUIZ1: "C. Static Typing",
        QUIZ2: "C. dynamic",
        QUIZ3: "C. readonly",
        QUIZ4: "B. function myFunc(): void",
        QUIZ5: "D. Both A and C",
        QUIZ6: "B. To describe the shape of an object",
        QUIZ7: "B. A type that can be one of several types"
    };

    const answers = await inquirer.prompt(questions);

    Object.keys(correctAnswers).forEach((key) => {
        if (answers[key] === correctAnswers[key]) {
            console.log(chalk.magentaBright("Correct Answer"));
        } else {
            console.log(chalk.red("Wrong Answer"));
        }
    });
};

let userWantsToPlay = true;

const askAgain = async () => {
    const response = await inquirer.prompt([
        {
            type: "confirm",
            name: "confirmAnswer",
            message: "Do you want to play the quiz again?",
        }
    ]);

    if (response.confirmAnswer) {
        userWantsToPlay = true;
    } else {
        userWantsToPlay = false;
        console.log(chalk.greenBright("Thank you for playing the quiz!"));
        chalkAnimation.rainbow("Goodbye!");
    }
};

(async () => {
    do {
        await quiz();
        await askAgain();
    } while (userWantsToPlay);
})();