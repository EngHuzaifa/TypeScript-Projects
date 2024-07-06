#! usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log( chalk.blue('lets start calculation')); 

async function main(){
    await inquirer
      .prompt([
        {
            type:"input",
            name:"num1",
            message:"Enter a first number :"


        },
        {
            type:"input",
            name:"num2",
            message:"Enter a second number :"
        },
        {
            type:"list",
            name:"operator",
            message:"Choose your operation you want to perform ?",
            choices:["+","-","*","/","%"]

        },
      ])
      .then((answers) => {
        
        if(answers.operator =="+"){
            console.log(`${answers.num1} + ${answers.num2} = ${chalk.greenBright(answers.num1 + answers.num2)}`);

        }else if(answers.operator== "-"){
            console.log(`${answers.num1} - ${answers.num2} = ${chalk.greenBright(answers.num1 - answers.num2)}`);

        }else if(answers.operator== "*"){
            console.log(`${answers.num1} * ${answers.num2} = ${chalk.greenBright(answers.num1 * answers.num2)}`);

        }else if(answers.operator== "/"){
            console.log(`${answers.num1} / ${answers.num2} = ${chalk.greenBright(answers.num1 / answers.num2)}`);

        }else if(answers.operator== "%"){
            console.log(`${answers.num1} % ${answers.num2} = ${chalk.greenBright(answers.num1 % answers.num2)}`);
        }
        
  })
      
}
let user_selection: boolean = true;
async function restart() {
    await inquirer
    .prompt([
        
        {
            type:"input",
            name:"restart",
            message:"DO you want to continue again \n Press y/n : "
        },

       
    ]).then((answer) =>{
        if (answer.restart =="y") {
            user_selection = true
        } else {
            console.log(chalk.magenta("Thank you. Bye!"));
            user_selection = false
        }
    })
    
}


do{
    await main()
    await restart()

}while(user_selection)
