#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "userId",
        type: "input",
        message: "kindly enter your ID :"
    },
    {
        name: "userPin",
        type: "number",
        message: "kindly enter your PIN :"
    },
    {
        name: "accountType",
        type: "list",
        message: "select your accountType :",
        choices: ["current", "savings"]
    },
    {
        name: "transactionsType",
        type: "list",
        message: "select your transactionsType :",
        choices: ["fastCash", "withDraw"],
        when(answers) {
            return answers.accountType;
        }
    },
    {
        name: "amount",
        type: "list",
        message: "select your amount :",
        choices: [1000, 5000, 10000, 20000, 50000],
        when(answers) {
            return answers.transactionsType == "fastCash";
        }
    },
    {
        name: "amount",
        type: "number",
        message: "insert your amount :",
        when(answers) {
            return answers.transactionsType == "withDraw";
        }
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log("your remaining balance is : ", remaining);
    }
    else {
        console.log("insufficient balance");
    }
}
