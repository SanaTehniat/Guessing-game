#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";
async function welcome() {
    let title = chalkAnimations.neon("\n\tlet's start the Guessing Game\n\t");
    await new Promise((res => {
        setTimeout(res, 2000);
    }));
    title.stop();
}
welcome();
let randomNumber = Math.floor(Math.random() * 1 + 1);
async function PlayGame() {
    const answers = await inquirer.prompt([{
            type: "number",
            name: "PersonNumber",
            message: chalk.blue("Enter a Guessing Number = ")
        }]);
    if (answers.PersonNumber === randomNumber) {
        console.log(chalk.yellow("Congratulations You are winner "));
    }
    else {
        console.log(chalk.red("\n Sorry you are lose\n "));
        console.log(chalk.yellow("\n play Again \n"));
        PlayGame();
    }
}
PlayGame();
