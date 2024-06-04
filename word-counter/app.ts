import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.green("Welcome to the word counter app!"));

const answers:{
    
    sentence:string

}= await inquirer.prompt([
    {
        type:"input",
        name:"sentence",
        message:"Enter your sentence to count the word : "

        
    }
]);

const words=answers.sentence.trim().split(" ")
console.log(words);
