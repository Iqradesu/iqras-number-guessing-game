#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgRgb(160, 6, 245)("\n*** WELCOME TO THE GAME OF GUESSING NUMBERS ***\n"));
let continueExit = await inquirer.prompt([
    {
        type: "list",
        name: "userChoice",
        message: "Do you want to play this game?",
        choices: ["Continue", "Exit"]
    }
]);
while (continueExit.userChoice == "Continue") {
    const randomnumber = Math.floor(Math.random() * 7 + 1);
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuessedNumber",
            message: "Please guess a number between 1-7: "
        }
    ]);
    if (answers.userGuessedNumber === randomnumber) {
        console.log(chalk.bold.greenBright("\nCongratulations! You guessed the right number."));
    }
    else {
        console.log(chalk.bold.red("\nOops! You guessed the wrong number.\n"));
    }
    ;
    continueExit = await inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "Do you want to continue or exit?",
            choices: ["Continue", "Exit"]
        }
    ]);
}
;
