import inquirer from "inquirer";
import chalk from "chalk";

interface Anstype{
    userId:string,
    userPin:number,
    AccountType:string,
    TransactionType:string,
    amount:number
   
}
 console.log(chalk.bgMagenta("ATM"));

const answers:Anstype = await inquirer.prompt

    ([
        {
            type:"input",
            name:"userId",
            message:"Kindly Enter Your Id : "
            
        },
        {
            type:"password",
            name:"userPin",
            message:"Kindly Enter Your Pin : "
        },
        {
            type:"list",
            name:"AccountType",
            choices:["Current Account","Saving Account"],
            message:"Select Your Account Type : "
        },
        {
            type:"list",
            name:"TransactionType",
            choices:["Fast Cash","Withdraw"],
            message:"Select Your Transaction : ",
            when(answers) {
                return answers.AccountType; 
            },
        },
        {
            type:"list",
            name:"Amount",
            choices:[5000,10000,15000,20000],
            message:"Select Your Amount : ",
            when(answers) {
                return answers.TransactionType == "Fast Cash"
            },
        },
        {
            type:"number",
            name:"Amount",
            message:"Enter Your  Amount : ",
            when(answers) {
                return answers.TransactionType == "Withdraw"
            },
        } 
    ])

if(answers.userId && answers.userPin){

    const Balance=Math.floor(Math.random()*10);
    console.log(Balance);
    const Enteredamount=answers.amount;
    if(Balance <= Enteredamount){
        const remaining=Balance-Enteredamount;
        console.log(chalk.bgMagenta("Your remaining Balance is ", remaining));
    }else{
        console.log(chalk.bgMagenta("Insuficient Balance "))
    }

}
  console.log(answers);